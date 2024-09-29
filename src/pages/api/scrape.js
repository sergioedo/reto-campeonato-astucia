import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import { createClient } from "@libsql/client";
import { sendNotificationEmail } from '../../services/mailer.js';

const client = new createClient({
	url: import.meta.env.TURSODB_URL,
	authToken: import.meta.env.TURSODB_TOKEN,
});

// Función para realizar el scraping
const scrapeProduct = async (url) => {
	// Hacer la solicitud a la URL del producto de Amazon
	// Configurar un User-Agent similar al de un navegador para evitar ser bloqueado
	const response = await fetch(url, {
		headers: {
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
		'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
		'Accept-Encoding': 'gzip, deflate, br',
		'Connection': 'keep-alive',
		'DNT': '1',  // Do Not Track
		'Upgrade-Insecure-Requests': '1'
		}
	});
	const html = await response.text();

	// Cargar el HTML en Cheerio
	const $ = cheerio.load(html);

	// Seleccionar el precio
	const priceElement = $('span.a-price .a-offscreen').first().text().trim(); // Extraer el precio
	const price = parseFloat(priceElement.replace(/[^\d,]/g, '').replace(',', '.')); // Formatear el precio para convertirlo a número

	if (!price) {
		throw new Error('No se encontró el precio en la página.');
	}

	// Comprobar el umbral
	const lastPriceResult = await client.execute('SELECT price FROM product_prices WHERE url = ? ORDER BY timestamp DESC LIMIT 1', [url]);
	const lastPrice = lastPriceResult.rows[0]?.price;
	
	if (lastPrice !== undefined) {
		const threshold = lastPrice * 0.05; // 5% de umbral
		if (Math.abs(price - lastPrice) > threshold) {
			// Aquí puedes implementar la lógica para notificar al usuario
			console.log(`Precio modificado: ${lastPrice} -> ${price}`)
			await sendNotificationEmail('sergio.edo@gmail.com', '¡Cambio de Precio!', `El nuevo precio es ${price}€. (antes ${lastPrice})`);
		}
	}

	// Guardar en la base de datos
	const result = await client.execute('INSERT INTO product_prices (url, price) VALUES (?, ?)', [url, price]);

	return { price, lastPrice }
}

// Manual scrape (specified by user request)
export async function POST({ request }) {
	try {
		const { url } = await request.json();
		const { price } = await scrapeProduct(url)
		return new Response(JSON.stringify({ price }), { status: 200 });

	} catch (err) {
		console.error('Error al hacer scraping del precio:', err);
		return new Response(JSON.stringify({ error: 'Error al obtener el precio' }), { status: 500 });
	}
}

// Automatic scrape (last requested url)
export async function GET({ request }) {
	try {
		const result = await client.execute('SELECT url FROM product_prices ORDER BY id DESC LIMIT 1');
		const latestUrl = result.rows[0]?.url;

		const { price } = await scrapeProduct(latestUrl)
		return new Response(JSON.stringify({ price }), { status: 200 });

	} catch (err) {
		console.error('Error al hacer scraping del precio:', err);
		return new Response(JSON.stringify({ error: 'Error al obtener el precio' }), { status: 500 });
	}
}
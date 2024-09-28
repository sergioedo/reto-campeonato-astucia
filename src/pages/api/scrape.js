import * as cheerio from 'cheerio'; // Importar cheerio correctamente
import fetch from 'node-fetch'; // Para hacer la solicitud HTTP (si no lo tienes instalado, ejecuta `npm install node-fetch`)

export async function post({ request }) {
  const { url } = await request.json();

  try {
    // Hacer la solicitud a la URL del producto de Amazon
    const response = await fetch(url);
    const html = await response.text();

    // Cargar el HTML en Cheerio
    const $ = cheerio.load(html);

    // Extraer el precio usando el selector adecuado (esto puede variar según la página de Amazon)
    const priceElement = $('#priceblock_ourprice').text(); // Modifica esto según el HTML real
    const price = parseFloat(priceElement.replace(/[^\d.-]/g, '')); // Limpiar el precio para convertirlo en número

    return new Response(JSON.stringify({ price }), { status: 200 });

  } catch (err) {
    console.error('Error al hacer scraping del precio:', err);
    return new Response(JSON.stringify({ error: 'Error al obtener el precio' }), { status: 500 });
  }
}

import cheerio from 'cheerio';
import axios from 'axios';

export async function post({ request }) {
  const { url } = await request.json();
  
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
    });
    
    const $ = cheerio.load(data);
    const priceText = $('#priceblock_ourprice').text().trim() || $('#priceblock_dealprice').text().trim();
    const price = parseFloat(priceText.replace(/[^\d\.]/g, ''));
    
    return new Response(JSON.stringify({ price }), { status: 200 });
  } catch (error) {
    console.error('Error during scraping:', error);
    return new Response('Error al hacer scraping', { status: 500 });
  }
}

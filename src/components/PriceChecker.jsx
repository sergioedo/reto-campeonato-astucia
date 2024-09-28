import { useState } from 'react';

export default function PriceChecker() {
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState(null);

  const checkPrice = async (e) => {
    e.preventDefault();
	console.log('Enviando la URL:', url);

    const response = await fetch('/api/scrape', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    setPrice(data.price);
  };

  return (
    <div>
      <form onSubmit={checkPrice}>
        <label htmlFor="url">URL del producto de Amazon:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button type="submit">Verificar Precio</button>
      </form>

      {price !== null && <p>El precio actual es: ${price}</p>}
    </div>
  );
}

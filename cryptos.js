import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export async function getCryptoData() {
  const response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: false
    }
  });

  return response.data;
}

export default async function handler(req, res) {
  try {
    const data = await getCryptoData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from CoinGecko' });
  }
}

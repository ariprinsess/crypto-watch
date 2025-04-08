import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';

export const fetchTopCoins = async () => {
  const res = await axios.get(`${API_URL}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
    },
  });
  return res.data;
};

export const fetchChartData = async (coinId) => {
  const res = await axios.get(`${API_URL}/coins/${coinId}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days: 7,
    },
  });
  return res.data.prices.map(([timestamp, price]) => ({
    time: new Date(timestamp).toLocaleDateString(),
    price,
  }));
};

import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const fetchCryptoData = async () => {
  const response = await axios.get('/api/cryptos');
  return response.data;
};

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  useEffect(() => {
    fetchCryptoData().then((data) => setCryptos(data));
  }, []);

  return (
    <div>
      <h1>Crypto Watch</h1>

      <div>
        <h2>Cryptocurrency Prices</h2>
        <ul>
          {cryptos.map((crypto) => (
            <li key={crypto.id}>
              <button onClick={() => setSelectedCrypto(crypto)}>
                {crypto.name}: ${crypto.current_price}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedCrypto && (
        <div>
          <h2>{selectedCrypto.name} Price History</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={selectedCrypto.sparkline_in_7d.price}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Home;

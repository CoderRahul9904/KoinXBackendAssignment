
import { saveCryptoData } from '../controllers/cryptoController';
import axios from 'axios';

const API_KEY=process.env.API_KEY
const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network%2Cbitcoin%2Cethereum&price_change_percentage=24h',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': `${API_KEY}`}
};

const fetchCryptoData = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        
        for (const coin of response.data) {
          const data = {
            coinType: coin.id,
            price: coin.current_price,
            marketCap: coin.market_cap,
            change24h: coin.price_change_percentage_24h,
            timestamp: new Date(),
          };
          saveCryptoData(data); 
        }
        console.log('Crypto data fetched and saved!');
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
  };


fetchCryptoData()
export default fetchCryptoData

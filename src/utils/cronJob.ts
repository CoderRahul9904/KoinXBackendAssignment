import cron from 'node-cron';
import fetchCryptoData from './fetchCryptoData';

cron.schedule('0 */2 * * *', fetchCryptoData);

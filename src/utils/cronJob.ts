import cron from 'node-cron';
import fetchCryptoData from './fetchCryptoData';

cron.schedule('0 */2 * * *', fetchCryptoData); // exceute every 2 hr
// cron.schedule('*/10 * * * * *', fetchCryptoData); for testing for 10sec

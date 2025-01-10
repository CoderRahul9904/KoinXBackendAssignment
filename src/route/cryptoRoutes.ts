import express from 'express';
import { getCryptoStats } from '../controllers/cryptoController';

const cryptoRoute = express.Router();

cryptoRoute
    .route('/stats')
    .get(getCryptoStats)

export default cryptoRoute

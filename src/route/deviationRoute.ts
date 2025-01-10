import express from 'express';
import { getPriceDeviation } from '../controllers/deviationController';
const deviationRoute=express.Router();

deviationRoute
      .route('/deviation')
      .get(getPriceDeviation)




export default deviationRoute
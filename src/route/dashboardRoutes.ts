import express from 'express';
import { getDashBoardData } from '../controllers/dashBoardController';
const dashBoardRoute=express.Router();

dashBoardRoute
      .route('/dashboard')
      .get(getDashBoardData)




export default dashBoardRoute
import { Request, Response } from 'express';
import CryptoDataModel from '../models/CryptoDataModel'; 
import { calculateDeviation } from '../utils/calculateDeviation'; 

export const getPriceDeviation = async (req: Request, res: Response): Promise<any> => {
  const { coinType } = req.query;

  if (!coinType) {
    return res.status(400).json({ error: 'Coin type is required' });
  }

  try {
    const records = await CryptoDataModel.find({ coinType })
      .sort({ timestamp: -1 })
      .limit(100);
    console.log(records)
    if (records.length < 2) {
      return res.status(400).json({ error: 'Not enough records to calculate deviation' });
    }
    const prices = records.map((record) => record.price);
    const deviation = calculateDeviation(prices);
    return res.status(200).json({ coinType, deviation });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

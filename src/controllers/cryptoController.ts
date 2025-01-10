import { Request, Response } from 'express';
import CryptoDataModel from '../models/CryptoDataModel';

export const getCryptoStats = async (req: Request, res: Response): Promise<any> => {
  const { coin } = req.query;

  try {
    const cryptoData = await CryptoDataModel.findOne({ coin });
    if (!cryptoData) return res.status(404).json({ error: 'Coin not found' });
    
    res.status(200).json(cryptoData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const saveCryptoData = async (data: { coinType: string, price: number, marketCap: number, change24h: number }) => {
  const crypto = new CryptoDataModel(data);
  await crypto.save();
  console.log("Saved")
};

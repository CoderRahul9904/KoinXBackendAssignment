import axios from "axios";
import { Request, Response } from "express";

const API_KEY = process.env.API_KEY;
const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network%2Cbitcoin%2Cethereum&price_change_percentage=24h',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': `${API_KEY}` },
};

export const getDashBoardData = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axios.request(options);
        res.status(200).json(response.data); 
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

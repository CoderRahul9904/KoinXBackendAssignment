import mongoose, { Schema, Document } from "mongoose";
import { ICryptoData } from "../interfaces/ICrytoData";

const KoinCryptoDb:mongoose.Connection=require('../db')
const CryptoDataSchema: Schema = new Schema({
  coinType: { type: String, required: true },
  price: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  change24h: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

console.log("yes")

const CryptoDataModel = KoinCryptoDb.model<ICryptoData>("CryptoData", CryptoDataSchema);

export default CryptoDataModel;

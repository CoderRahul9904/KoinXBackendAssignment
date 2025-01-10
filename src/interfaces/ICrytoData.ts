export interface ICryptoData extends Document {
  coin: string;
  price: number;
  marketCap: number;
  change24h: number;
  timestamp: Date;
}
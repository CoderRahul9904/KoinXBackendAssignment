export const calculateDeviation = (prices: number[]): number => {
    const n = prices.length;
    const mean = prices.reduce((acc, price) => acc + price, 0) / n;
    const squaredDifferences = prices.map((price) => Math.pow(price - mean, 2));
    const averageSquaredDifference = squaredDifferences.reduce((acc, val) => acc + val, 0) / n;
    return Math.sqrt(averageSquaredDifference);
};
  
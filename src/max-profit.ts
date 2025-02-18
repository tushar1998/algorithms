export function maxProfit(prices: number[]): number {
  let min = Infinity;
  let profit = 0;

  for (const price of prices) {
    if (price < min) {
      min = price;
    } else {
      profit = Math.max(profit, price - min);
    }
  }

  return profit;
}

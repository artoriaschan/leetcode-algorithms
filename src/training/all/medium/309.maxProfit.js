// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
/**
 * @param {number[]} prices
 * @return {number}
 */
// 状态定义
// f[i][0]: 手上持有股票的最大收益
// f[i][1]: 手上不持有股票，并且处于冷冻期中的累计最大收益
// f[i][2]: 手上不持有股票，并且不在冷冻期中的累计最大收益
// 转移公式
// f[i][0] = max(f[i − 1][0], f[i − 1][2] − prices[i])
// f[i][1] = f[i − 1][0] + prices[i]
// f[i][2] = max(f[i − 1][1], f[i − 1][2])
// 最终收益
// final = max(f[n − 1][1], f[n − 1][2])
function maxProfit(prices) {
  if (prices.length === 0) {
    return 0;
  }

  let n = prices.length;
  // f[i][0]: 手上持有股票的最大收益
  // f[i][1]: 手上不持有股票，并且处于冷冻期中的累计最大收益
  // f[i][2]: 手上不持有股票，并且不在冷冻期中的累计最大收益
  // let f = Array.from(new Array(n), () => new Array(3).fill(0));
  // f[0][0] = -prices[0];
  let f0 = -prices[0];
  let f1 = 0;
  let f2 = 0;

  for (let i = 1; i < n; ++i) {
    // f[i][0] = Math.max(f[i - 1][0], f[i - 1][2] - prices[i]);
    // f[i][1] = f[i - 1][0] + prices[i];
    // f[i][2] = Math.max(f[i - 1][1], f[i - 1][2]);
    let newf0 = Math.max(f0, f2 - prices[i]);
    let newf1 = f0 + prices[i];
    let newf2 = Math.max(f1, f2);
    f0 = newf0;
    f1 = newf1;
    f2 = newf2;
  }
  return Math.max(f1, f2);
}

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// 状态定义
// dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润
// dp[i][1] 表示第 i 天交易完后手里持有一支股票的最大利润（i 从 0 开始）

// 状态转移
// dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
// dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i])

// 初始状态
// dp[0][0] = 0
// dp[0][1] = -prices[0]
function maxProfit(prices, fee) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
}

// 压缩状态
function maxProfit1(prices, fee) {
  const n = prices.length;
  let sell = 0;
  let buy = -prices[0];
  for (let i = 1; i < n; i++) {
    [sell, buy] = [Math.max(sell, buy + prices[i] - fee), Math.max(buy, sell - prices[i])];
  }
  return sell;
}

/* eslint-disable camelcase */
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const n = prices.length;
  // base case: dp[-1][0] = 0, dp[-1][1] = -infinity
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  for (let i = 0; i < n; i++) {
    // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    // dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }
  return dp_i_0;
}

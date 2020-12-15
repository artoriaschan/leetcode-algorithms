/* eslint-disable camelcase */
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  for (let price of prices) {
    // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + price);
    // dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - price);
  }
  return dp_i_0;
}

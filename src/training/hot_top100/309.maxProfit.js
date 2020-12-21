/* eslint-disable camelcase */
/**
 * @param {number[]} prices
 * @return {number}
 * 同类型题: 121
 * 思路:
 *  动态规划
 *    0 <= i <= n-1, 1 <= k <= K
 *    n 为天数，k为最多交易数, 0/1代表是否持有股票
 *    dp为利润的数组.
 *    初始状态:
 *      dp[-1][k][0] = dp[i][0][0] = 0
 *      dp[-1][k][1] = dp[i][0][1] = -infinity
 *    状态转移方程:
 *      dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
 *      dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
 *  本题条件有一天的冷冻期, 第 i 天选择 buy 的时候，要从 i-2 的状态转移，而不是 i-1 。
 *  简化为:
 *    dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
 *    dp[i][1] = max(dp[i-1][1], dp[i-2][0] - prices[i])
 */
// eslint-disable-next-line no-unused-vars
function maxProfit(prices) {
  const n = prices.length;
  if (n === 0 || n === 1) return 0;
  const dp = Array.from(new Array(prices.length), () => new Array(prices.length).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]);
  dp[1][1] = Math.max(dp[0][1], 0 - prices[1]);
  for (let i = 2; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }
  return dp[n - 1][0];
}
// eslint-disable-next-line no-unused-vars
function maxProfit1(prices) {
  const n = prices.length;
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  let dp_pre_0 = 0; // dp[i - 2][0]
  for (let i = 0; i < n; i++) {
    // dp_i_0 => dp[i - 1][0]
    // dp_i_1 => dp[i - 1][1]
    let tmp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]); // dp_i_0 => dp[i][0]
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]); // dp_i_1 => dp[i][1]
    dp_pre_0 = tmp; // tmp => dp[i - 1][0], 所以赋值后在下一循环保持 dp_pre_0 依旧指向 dp[i - 2][0]
  }
  return dp_i_0;
}

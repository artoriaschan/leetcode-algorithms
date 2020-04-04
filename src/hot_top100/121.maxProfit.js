/* eslint-disable camelcase */
/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-lab/
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
 *  本题条件为只能交易一次, 故k = 1, 则可省略k这一层:
 *  简化为:
 *    dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
 *    dp[i][1] = max(dp[i-1][1], -prices[i])
 */
function maxProfit(prices) {
  // const n = prices.length;
  // if (n === 0) return 0;
  // const dp = Array.from(new Array(prices.length), () => new Array(prices.length).fill(0));
  // for (let i = 0; i < n; i++) {
  //   if (i - 1 === -1) {
  //     dp[i][0] = 0;
  //     dp[i][1] = -prices[i];
  //     // eslint-disable-next-line no-continue
  //     continue;
  //   }
  //   dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
  //   dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  // }
  // return dp[n - 1][0];
  // 但是这样处理 base case 很麻烦，而且注意一下状态转移方程，
  // 新状态只和相邻的一个状态有关，其实不用整个 dp 数组，
  // 只需要一个变量储存相邻的那个状态就足够了，这样可以把空间复杂度降到 O(1)
  // 优化版
  const n = prices.length;
  // base case: dp[-1][0] = 0, dp[-1][1] = -infinity
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  for (let i = 0; i < n; i++) {
    // dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    // dp[i][1] = max(dp[i-1][1], -prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }
  return dp_i_0;
}

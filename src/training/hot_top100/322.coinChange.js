/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 思路:
 *  动态规划:
 *    状态定义: dp[i] 金额为I时最小的硬币数
 *    状态转移方程: dp[i] = Math.min(dp[i], dp[i - coin] + 1);
 */
// eslint-disable-next-line no-unused-vars
function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

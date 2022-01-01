// https://leetcode-cn.com/problems/coin-change-2/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 状态定义
// dp[i][j] 表示若只使用前 i 个物品（可以重复使用），当背包容量为 j 时，有 dp[i][j] 种方法可以装满背包。
// 状态转移方程
// dp[i][j] = dp[i - 1][j], 第i个物品没有装进背包(j - coins[i - 1] < 0)
// dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]], 第i个物品装进背包(j - coins[i - 1] >= 0)
function change(amount, coins) {
  const n = coins.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(amount + 1).fill(0));
  for (let i = 0; i <= n; i++) dp[i][0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= amount; j++)
      if (j - coins[i - 1] >= 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
  }
  return dp[n][amount];
}
// dp[x] 表示金额之和等于 x 的硬币组合数
// dp[i] += dp[i - coin];
function change1(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
}

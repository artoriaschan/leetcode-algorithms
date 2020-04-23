/**
 * @param {number} n
 * @return {number}
 * 思路:
 *  动态规划: 和518类似
 */
// eslint-disable-next-line no-unused-vars
function waysToChange(n) {
  let dp = new Array(n + 1).fill(1);
  let coins = [1, 5, 10, 25];
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j <= n; j++) {
      if (j - coins[i] >= 0) {
        dp[j] = (dp[j] + dp[j - coins[i]]) % (1e9 + 7);
      }
    }
  }
  return dp[n];
}

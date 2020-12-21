/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 思路:
 *  动态规划
 */
// eslint-disable-next-line no-unused-vars
function numWays(n, k) {
  let dp = [];
  dp[0] = 0;
  dp[1] = k;
  dp[2] = k * k;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = (k - 1) * dp[i - 1] + (k - 1) * dp[i - 2];
  }
  return dp[n];
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 思路:
 *  1.排列: 机器人向下向右走的步数是固定
 *    起点和终点不算在内，那总共走的步数为：N = m+n-2;
 *    向下走的步数为：k = m -1
 *  2.动态规划:
 *    状态:
 *      dp[i][j]为到i,j最多路径
 *      dp[0][j] = 1
 *      dp[i][0] = 1
 *    状态方程:
 *      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 *      每个位置的路径 = 该位置左边的路径 + 该位置上边的路径
 */
/**
 * 思路一
 * @param {*} m
 * @param {*} n
 */
// eslint-disable-next-line no-unused-vars
function uniquePaths(m, n) {
  let N = n + m - 2;
  let k = m - 1;
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = (result * (N - k + i)) / i;
  }
  return result;
}
/**
 * 思路二
 * @param {*} m
 * @param {*} n
 */
// eslint-disable-next-line no-unused-vars
function uniquePaths1(m, n) {
  let dp = Array.from(new Array(m), () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) dp[0][i] = 1;
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

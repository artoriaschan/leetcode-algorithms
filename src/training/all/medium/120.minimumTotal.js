// https://leetcode-cn.com/problems/triangle/
/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  const rows = triangle.length;
  const dp = Array.from(new Array(rows), () => new Array(rows).fill(0));
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < rows; ++i) {
    // 推导公式 1
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    for (let j = 1; j < i; ++j) {
      // 推导公式 2
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
    // 推导公式 3
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
  }
  let minTotal = dp[rows - 1][0];
  for (let i = 1; i < rows; ++i) {
    minTotal = Math.min(minTotal, dp[rows - 1][i]);
  }
  return minTotal;
}

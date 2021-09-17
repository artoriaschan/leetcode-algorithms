/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-17 14:49:45
 * @LastEditTime: 2021-09-17 15:02:48
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/unique-paths-ii/
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from(new Array(m), () => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
      else if (i === 0 && j === 0) dp[i][j] = 1;
      else if (i === 0) dp[i][j] = dp[i][j - 1];
      else if (j === 0) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

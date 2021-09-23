/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-18 13:35:56
 * @LastEditTime: 2021-09-18 13:56:00
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/minimum-path-sum/
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const dp = Array.from(new Array(rows), () => new Array(cols).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < cols; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.min(grid[i][j] + dp[i - 1][j], grid[i][j] + dp[i][j - 1]);
    }
  }
  return dp[rows - 1][cols - 1];
}

const grid = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(minPathSum(grid));

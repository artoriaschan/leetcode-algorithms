/**
 * @param {number[][]} grid
 * @return {number}
 * 思路:
 *  动态规划
 *    dp[i][j]为原点到(i,j)的最短路径
 *    grid(i, j) = grid(i - 1, j - 1) + min(grid(i - 1, j), grid(i, j - 1))
 */
// eslint-disable-next-line no-unused-vars
function minPathSum(grid) {
  const row = grid.length;
  const col = grid[0].length;
  const dp = Array.from(new Array(row + 1), () => new Array(col + 1).fill(Number.MAX_VALUE));
  dp[0][1] = 0;
  for (let i = 1; i < row + 1; i++) {
    for (let j = 1; j < col + 1; j++) {
      // state transition
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }

  return dp[row][col];
}

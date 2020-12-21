/**
 * @param {character[][]} matrix
 * @return {number}
 * 思路:
 *  暴力法
 *  动态规划:
 *    状态定义: dp[i][j]  表示的是由 1 组成的最大正方形的边长
 *    状态转移方程: dp(i, j) = min(dp(i−1, j), dp(i−1, j−1), dp(i, j−1))+1
 */
// DP, 使用原数组来做dp数组
// eslint-disable-next-line no-unused-vars
function maximalSquare(matrix) {
  if (!matrix.length) return 0;
  let maxsqlen = 0;
  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (matrix[row][col] === "1") {
        matrix[row][col] = Number(matrix[row][col]);
        if (row !== 0 && col !== 0) {
          matrix[row][col] = Math.min(matrix[row - 1][col], matrix[row - 1][col - 1], matrix[row][col - 1]) + 1;
        }
      }
      maxsqlen = Math.max(maxsqlen, matrix[row][col]);
    }
  }
  return maxsqlen ** 2;
}
// eslint-disable-next-line no-unused-vars
function maximalSquare1(matrix) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;
  let maxsqlen = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === "1") {
        let sqlen = 1;
        let flag = true;
        while (sqlen + i < rows && sqlen + j < cols && flag) {
          for (let k = j; k <= sqlen + j; k++) {
            if (matrix[i + sqlen][k] === "0") {
              flag = false;
              break;
            }
          }
          for (let k = i; k <= sqlen + i; k++) {
            if (matrix[k][j + sqlen] === "0") {
              flag = false;
              break;
            }
          }
          if (flag) sqlen++;
        }
        if (maxsqlen < sqlen) {
          maxsqlen = sqlen;
        }
      }
    }
  }
  return maxsqlen ** 2;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 思路:
 *  暴力法
 *  搜索空间缩减: 选择从左下角开始查找, 增长和减少都是单调的
 */
// eslint-disable-next-line no-unused-vars
function searchMatrix(matrix, target) {
  let rows = matrix.length;
  if (rows <= 0) return false;
  let cols = matrix[0].length;
  if (cols <= 0) return false;
  let x = rows - 1;
  let y = 0;
  while (x >= 0 && y < cols) {
    if (matrix[x][y] > target) {
      x--;
    } else if (matrix[x][y] < target) {
      y++;
    } else {
      return true;
    }
  }
  return false;
}
// eslint-disable-next-line no-unused-vars
function searchMatrix1(matrix, target) {
  let rows = matrix.length;
  if (rows <= 0) return false;
  let cols = matrix[0].length;
  if (cols <= 0) return false;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}

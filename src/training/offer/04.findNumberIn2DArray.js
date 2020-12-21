/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 左下角依次判断，需要明确增大和减小的方向
function findNumberIn2DArray(matrix, target) {
  if (matrix.length === 0) return false;
  let x = matrix.length - 1;
  let y = 0;
  while (x >= 0 && y < matrix[0].length) {
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

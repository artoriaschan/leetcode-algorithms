/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
// 当且仅当矩阵中每个元素都与其左上角相邻的元素（如果存在）相等时，该矩阵为托普利茨矩阵。
function isToeplitzMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }
  return true;
}

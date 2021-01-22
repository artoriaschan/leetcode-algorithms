/**
 * @param {number[][]} mat
 * @return {number}
 */
function diagonalSum(mat) {
  const rows = mat.length;
  if (rows === 0) return 0;
  const cols = mat[0].length;
  if (cols === 0) return 0;
  let res = 0;
  for (let i = 0; i < rows; i++) {
    res += mat[i][i];
    res += mat[i][rows - 1 - i];
  }
  if (rows % 2) {
    res -= mat[Math.floor(rows / 2)][Math.floor(cols / 2)];
  }
  return res;
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalSum(mat));

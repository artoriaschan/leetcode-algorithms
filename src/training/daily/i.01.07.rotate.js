/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 思路:
 *  同48
 */
// eslint-disable-next-line no-unused-vars
function rotate(matrix) {
  const maxIndex = matrix.length - 1;
  let newLoc = {
    1: (row, col) => ({ row: col, col: maxIndex - row }),
    2: (row, col) => ({ row: maxIndex - row, col: maxIndex - col }),
    3: (row, col) => ({ row: maxIndex - col, col: row }),
  };

  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = i; j < maxIndex - i; j++) {
      let temp = matrix[i][j];
      let row = i;
      let col = j;
      for (let k = 3; k > 0; k--) {
        const { row: newRow, col: newCol } = newLoc[k](i, j);
        matrix[row][col] = matrix[newRow][newCol];
        row = newRow;
        col = newCol;
      }
      matrix[row][col] = temp;
    }
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function countNegatives(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let res = 0;
  for (let i = 0; i < rows; i++) {
    if (grid[i][0] >= 0) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] < 0) {
          res += cols - j;
          break;
        }
      }
    } else {
      res += (rows - i) * cols;
      break;
    }
  }
  return res;
}

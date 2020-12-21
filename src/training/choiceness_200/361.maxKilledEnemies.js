/**
 * @param {character[][]} grid
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function maxKilledEnemies(grid) {
  const rows = grid.length;
  if (!rows) return 0;
  const cols = grid[0].length;
  let max = 0;
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === "0") {
        let currMax = calcuKill(grid, i, j);
        max = Math.max(currMax, max);
      }
    }
  }
  return max;
}
function calcuKill(grid, i, j) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirX = [0, 1, 0, -1];
  const dirY = [1, 0, -1, 0];
  let cnt = 0;
  for (let k = 0; k < 4; ++k) {
    let tx = i;
    let ty = j;
    while (tx >= 0 && tx < rows && ty >= 0 && ty < cols && grid[tx][ty] !== "W") {
      // 判断是否碰到边界或者墙
      cnt += grid[tx][ty] === "E";
      tx += dirX[k];
      ty += dirY[k];
    }
  }
  return cnt;
}

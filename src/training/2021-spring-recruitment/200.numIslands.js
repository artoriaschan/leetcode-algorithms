/**
 * @param {character[][]} grid
 * @return {number}
 */
// 深度优先遍历
function dfs(grid, r, c) {
  let nr = grid.length;
  let nc = grid[0].length;

  if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] === "0") {
    return;
  }
  grid[r][c] = "0";
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}
function numIslands(grid) {
  if (grid == null || grid.length === 0) {
    return 0;
  }

  let nr = grid.length;
  let nc = grid[0].length;
  let numIslands = 0;
  for (let r = 0; r < nr; ++r) {
    for (let c = 0; c < nc; ++c) {
      if (grid[r][c] === "1") {
        ++numIslands;
        dfs(grid, r, c);
      }
    }
  }

  return numIslands;
}
// 广度优先遍历
function numIslands1(grid) {
  if (grid == null || grid.length === 0) {
    return 0;
  }

  let nr = grid.length;
  let nc = grid[0].length;
  let numIslands = 0;
  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === "1") {
        grid[r][c] = "0";
        numIslands++;
        const neighbors = [];
        neighbors.push(r * nc + c);
        while (neighbors.length > 0) {
          let id = neighbors.shift();
          let row = Math.floor(id / nc);
          let col = id % nc;
          // top
          if (row - 1 >= 0 && grid[row - 1][col] === "1") {
            neighbors.add((row - 1) * nc + col);
            grid[row - 1][col] = "0";
          }
          // down
          if (row + 1 >= 0 && grid[row + 1][col] === "1") {
            neighbors.add((row + 1) * nc + col);
            grid[row + 1][col] = "0";
          }
          // left
          if (col - 1 >= 0 && grid[row][col - 1] === "1") {
            neighbors.add(row * nc + col - 1);
            grid[row][col - 1] = "0";
          }
          // right
          if (col + 1 >= 0 && grid[row][col + 1] === "1") {
            neighbors.add(row * nc + col + 1);
            grid[row][col + 1] = "0";
          }
        }
      }
    }
  }
  return numIslands;
}

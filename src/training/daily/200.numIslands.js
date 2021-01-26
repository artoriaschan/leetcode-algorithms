/**
 * @param {character[][]} grid
 * @return {number}
 */
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

// https://leetcode-cn.com/problems/coloring-a-border/

function colorBorder(grid, row, col, color) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array.from(new Array(m), () => new Array(n).fill(false));
  const borders = [];
  visited[row][col] = true;
  const originalColor = grid[row][col];
  dfs(grid, row, col, visited, borders, originalColor);
  for (let i = 0; i < borders.length; i++) {
    const x = borders[i][0];
    const y = borders[i][1];
    grid[x][y] = color;
  }
  return grid;
}

function dfs(grid, x, y, visited, borders, originalColor) {
  const d = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const m = grid.length;
  const n = grid[0].length;
  let isBorder = false;
  for (let item of d) {
    const nx = item[0] + x;
    const ny = item[1] + y;
    // 边界点
    if (!(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === originalColor)) {
      isBorder = true;
    } else if (!visited[nx][ny]) {
      visited[nx][ny] = true;
      dfs(grid, nx, ny, visited, borders, originalColor);
    }
  }
  if (isBorder) {
    borders.push([x, y]);
  }
}

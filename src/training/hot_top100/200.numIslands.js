/**
 * @param {character[][]} grid
 * @return {number}
 * 思路:
 *  dfs: 发现为1, 将其置为0(标记访问过该结点), 并且遍历其上下左右
 *  bfs: 线性扫描整个二维网格，如果一个结点包含 1，则以其为根结点启动广度优先搜索。将其放入队列中，并将值设为 0 以标记访问过该结点。迭代地搜索队列中的每个结点，直到队列为空。
 *  并查集
 */
// eslint-disable-next-line no-unused-vars
function numIslandsByDFS(grid) {
  let dfs = (matrix, r, c) => {
    let rows = grid.length;
    let cols = grid[0].length;

    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
  };
  let ans = 0;
  let rows = grid.length;
  if (rows === 0) return 0;
  let cols = grid[0].length;
  if (cols === 0) return 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        ans++;
        dfs(grid, i, j);
      }
    }
  }
  return ans;
}
// eslint-disable-next-line no-unused-vars
function numIslandsByBFS(grid) {
  let ans = 0;
  let rows = grid.length;
  if (rows === 0) return 0;
  let cols = grid[0].length;
  if (cols === 0) return 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        ans++;
        grid[i][j] = "0";
        let queue = [];
        queue.push({ i, j });
        while (queue.length) {
          let info = queue.shift();
          let row = info.i;
          let col = info.j;
          if (row - 1 >= 0 && grid[row - 1][col] === "1") {
            queue.push({ i: row - 1, j: col });
            grid[row - 1][col] = "0";
          }
          if (row + 1 < rows && grid[row + 1][col] === "1") {
            queue.push({ i: row + 1, j: col });
            grid[row + 1][col] = "0";
          }
          if (col - 1 >= 0 && grid[row][col - 1] === "1") {
            queue.push({ i: row, j: col - 1 });
            grid[row][col - 1] = "0";
          }
          if (col + 1 < cols && grid[row][col + 1] === "1") {
            queue.push({ i: row, j: col + 1 });
            grid[row][col + 1] = "0";
          }
        }
      }
    }
  }
  return ans;
}

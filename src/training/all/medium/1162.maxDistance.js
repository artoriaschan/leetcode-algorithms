/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxDistance(grid) {
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  // 所有陆地同一原点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }
  // 没有陆地或者没有海洋，返回-1。
  if (queue.length === 0) return -1;

  let hasOcean = false;
  let point = null;
  while (queue.length > 0) {
    point = queue.shift();
    const x = point[0];
    const y = point[1];
    for (const dir of dirs) {
      const newX = x + dir[0];
      const newY = y + dir[1];
      if (newX < 0 || newX >= m || newY < 0 || newY >= n || grid[newX][newY] !== 0) {
        continue;
      }
      // 这里我直接修改了原数组，因此就不需要额外的数组来标志是否访问
      grid[newX][newY] = grid[x][y] + 1;
      if (!hasOcean) hasOcean = true;
      queue.push([newX, newY]);
    }
  }

  // 没有陆地或者没有海洋，返回-1。
  if (!hasOcean) return -1;

  // 返回最后一次遍历到的海洋的距离。
  return grid[point[0]][point[1]] - 1;
}

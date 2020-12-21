/**
 * @param {number[][]} grid
 * @return {number}
 * https://leetcode-cn.com/problems/as-far-from-land-as-possible/solution/di-tu-fen-xi-by-leetcode-solution/
 * 思路:
 *  宽度优先搜索
 *  多源最短路
 *  动态规划
 */
// eslint-disable-next-line no-unused-vars
function maxDistance(grid) {
  const land = [];
  const ocean = [];
  // 记录 陆地和海洋
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j]) {
        land.push([i, j]);
      } else {
        ocean.push([i, j]);
      }
    }
  }
  if (land.length === 0 || ocean.length === 0) {
    return -1; // 没有海洋或没有陆地
  }
  // 求每一个海洋区域跟所有陆地的最小距离，
  // 然后在所有最小距离中求最大距离，就是所有海洋离陆地最远的距离
  let max = -1;
  for (let i = 0; i < ocean.length; i++) {
    // 求一片海洋到所有陆地的距离中最小的距离
    let min = Number.MAX_VALUE;
    for (let j = 0; j < land.length; j++) {
      let dis = distance(ocean[i], land[j]);
      if (dis < min) {
        min = dis;
      }
      if (min === 1) {
        break; // 提前结束，最小可能的距离是1
      }
    }
    // 求最小距离中的最大距离
    if (min > max) {
      max = min;
    }
  }
  return max;
}

/**
 * 曼哈顿距离
 * @param a
 * @param b
 * @returns {number}
 */
function distance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

// eslint-disable-next-line no-unused-vars
function maxDistance1(grid) {
  let result = -1; // 距离
  const land = []; // 存放陆地的队列
  const row = grid.length; // 行数
  const col = grid[0].length; // 列数
  for (let i = 0; i < row; i++) {
    // 所有陆地入队
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        land.push([i, j]);
      }
    }
  }
  // 全是海洋或者陆地
  if (land.length === 0 || land.length === row * col) {
    return -1;
  }
  // 对每一块陆地进行BFS，对每一块遍历过的海洋标记成陆地
  while (land.length > 0) {
    let size = land.length; // 记录当前层陆地的个数
    while (size > 0) {
      size--;
      let cur = land.shift(); // 第一个入队的陆地
      // 四个方向
      let directions = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
      ];
      for (let i = 0; i < 4; i++) {
        let r = cur[0] + directions[i][0];
        let c = cur[1] + directions[i][1];
        // 越界，跳过此方向
        if (r < 0 || r > col - 1 || c < 0 || c > row - 1 || grid[r][c] === 1) {
          // eslint-disable-next-line no-continue
          continue;
        }
        // 如果是海洋，标记为陆地，加入到队列中，距离＋1
        if (grid[r][c] === 0) {
          grid[r][c] = 1;
          land.push([r, c]);
        }
      }
    }
    result++;
  }
  return result;
}

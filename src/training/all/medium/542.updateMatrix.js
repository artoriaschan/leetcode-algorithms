/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
// BFS
function updateMatrix(mat) {
  const m = mat.length;
  const n = mat[0].length;

  const dist = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const seen = new Array(m).fill(0).map(() => new Array(n).fill(0));
  const queue = [];
  // 将所有的 0 视为一个整体的超级源点
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        seen[i][j] = 1;
      }
    }
  }

  // 广度优先搜索可以找到从起点到其余所有点的最短距离
  while (queue.length) {
    const [i, j] = queue.shift();
    for (let d = 0; d < 4; d++) {
      const ni = i + dirs[d][0];
      const nj = j + dirs[d][1];
      // 越界检测和是否遍历过
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && !seen[ni][nj]) {
        dist[ni][nj] = dist[i][j] + 1;
        queue.push([ni, nj]);
        seen[ni][nj] = 1;
      }
    }
  }

  return dist;
}

function updateMatrix1(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const dist = new Array(m).fill(0).map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  // 初始状态，如果 (i, j) 的元素为 0，那么距离为 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        dist[i][j] = 0;
      }
    }
  }
  // 水平向左 垂直向上
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
      }
    }
  }
  // 水平向左 垂直向下
  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < m) {
        dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
      }
    }
  }
  // 水平向右 垂直向上
  for (let i = 0; i < m; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (i - 1 >= 0) {
        dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
      }
      if (j + 1 < n) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
      }
    }
  }
  // 水平向右 垂直向下
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i + 1 < m) {
        dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      }
      if (j + 1 < n) {
        dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
      }
    }
  }

  return dist;
}

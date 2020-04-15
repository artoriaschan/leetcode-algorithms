/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 思路:
 *  BFS: 由一个0的情况延伸到多个0的情况
 *  动态规划:
 *    状态定义: dp[i][j] 表示到最近0的距离
 *    状态转移方程:
 *      (i, j) = 0 => 0
 *      (i, j) = 1 => 1 + min(dp[i−1][j], dp[i][j−1]) 水平向左移动 和 竖直向上移动
 *                    1 + min(dp[i-1][j], dp[i][j+1]) 水平向左移动 和 竖直向下移动
 *                    1 + min(dp[i+1][j], dp[i][j−1]) 水平向右移动 和 竖直向上移动
 *                    1 + min(dp[i+1][j], dp[i][j+1]) 水平向右移动 和 竖直向下移动
 */
// eslint-disable-next-line no-unused-vars
function updateMatrix(matrix) {
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let m = matrix.length;
  let n = matrix[0].length;
  let dist = Array.from(new Array(m), () => new Array(n).fill(0));
  let seen = Array.from(new Array(m), () => new Array(n).fill(0));
  let q = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] === 0) {
        q.push([i, j]);
        seen[i][j] = 1;
      }
    }
  }
  while (q.length) {
    let [i, j] = q.shift();
    for (let d = 0; d < 4; ++d) {
      let ni = i + dirs[d][0];
      let nj = j + dirs[d][1];
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && !seen[ni][nj]) {
        dist[ni][nj] = dist[i][j] + 1;
        q.push([ni, nj]);
        seen[ni][nj] = 1;
      }
    }
  }
  return dist;
}
// eslint-disable-next-line no-unused-vars
function updateMatrix1(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = Array.from(new Array(m), () => new Array(n).fill(Number.MAX_VALUE));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        dp[i][j] = 0;
      }
    }
  }
  // 只有 水平向左移动 和 竖直向上移动，注意动态规划的计算顺序
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
      }
    }
  }
  // 只有 水平向左移动 和 竖直向下移动，注意动态规划的计算顺序
  for (let i = m - 1; i >= 0; --i) {
    for (let j = 0; j < n; ++j) {
      if (i + 1 < m) {
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
      }
    }
  }
  // 只有 水平向右移动 和 竖直向上移动，注意动态规划的计算顺序
  for (let i = 0; i < m; ++i) {
    for (let j = n - 1; j >= 0; --j) {
      if (i - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
      }
      if (j + 1 < n) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
      }
    }
  }
  // 只有 水平向右移动 和 竖直向下移动，注意动态规划的计算顺序
  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      if (i + 1 < m) {
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
      }
      if (j + 1 < n) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
      }
    }
  }
  return dp;
}

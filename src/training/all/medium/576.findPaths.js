/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
function findPaths(m, n, maxMove, startRow, startColumn) {
  const MOD = 1000000007;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let outCounts = 0;
  // dp[i][j][k] 表示走i步到达(j, k)位置的路径数量
  // dp[i][j][k] 初始化为 0
  const dp = new Array(maxMove + 1).fill(0).map(() => new Array(m).fill(0).map(() => new Array(n).fill(0)));
  // dp[0][startRow][startColumn] 初始化为 1
  dp[0][startRow][startColumn] = 1;

  for (let i = 0; i < maxMove; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        const count = dp[i][j][k];
        if (count > 0) {
          for (const direction of dirs) {
            const j1 = j + direction[0];
            const k1 = k + direction[1];
            if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n) {
              // 当 0 <= j1 < m, 0 <= k1 < n 时，dp[i + 1][j1][k1] += dp[i][j][k]
              dp[i + 1][j1][k1] = (dp[i + 1][j1][k1] + count) % MOD;
            } else {
              // 当 i + 1次出界时，将 dp[i][j][k] 累加到出界的路径数量上
              outCounts = (outCounts + count) % MOD;
            }
          }
        }
      }
    }
  }

  return outCounts;
}

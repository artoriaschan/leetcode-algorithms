// https://leetcode-cn.com/problems/dungeon-game/
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// 从右下到左上, dp[i][j] 表示从坐标 (i,j) 到终点所需的最小初始值。
// 状态转移方程
// dp[i][j] = max(min(dp[i + 1][j], dp[i][j + 1]) − dungeon(i,j), 1)
function calculateMinimumHP(dungeon) {
  let n = dungeon.length;
  let m = dungeon[0].length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(Number.MAX_VALUE));
  dp[n][m - 1] = 1;
  dp[n - 1][m] = 1;
  for (let i = n - 1; i >= 0; --i) {
    for (let j = m - 1; j >= 0; --j) {
      const minn = Math.min(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(minn - dungeon[i][j], 1);
    }
  }
  return dp[0][0];
}

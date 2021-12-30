/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 状态定义
// dp[i][j] 表示 text[0 : i] 和 text[0 : j] 的最长公共子序列的长度。
// text1[0:i]表示text1的长度为i的前缀(text1[0] - text[i - 1])，text2[0:j]表示text2的长度为j的前缀(text2[0] - text[j - 1])。
// 初始条件
// dp[i][0] = 0, 当 0 ≤ i ≤ m
// dp[0][j] = 0, 当 0 ≤ j ≤ n
// 转换方程
// dp[i][j] = dp[i − 1][j − 1] + 1, 当 text1[i − 1] === text2[j - 1]
// dp[i][j] = max(dp[i − 1][j], dp[i][j − 1]), 当 text1[i − 1] !== text2[j - 1]
function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1];
      if (c1 === c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// 本题与主站 115 题相同： https://leetcode-cn.com/problems/distinct-subsequences/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function numDistinct(s, t) {
  const m = s.length;
  const n = t.length;
  if (m < n) return 0;
  // dp[i][j]表示在 s[i:] 的子序列中 t[j:] 出现的个数
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    // 空字符串是任何字符串的子串
    dp[i][n] = 1;
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        // 当 s[i] === t[j] 时，有 dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j]
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
      } else {
        // 当 s[i] !== t[j] 时，有 dp[i][j] = dp[i + 1][j]
        dp[i][j] = dp[i + 1][j];
      }
    }
  }
  return dp[0][0];
}

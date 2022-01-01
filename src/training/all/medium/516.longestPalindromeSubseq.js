// https://leetcode-cn.com/problems/longest-palindromic-subsequence/
/**
 * @param {string} s
 * @return {number}
 */
// dp[i][j]定义为s[i..j]中最长回文子的长度
// 状态转移方程
// dp[i][j] = dp[i + 1][j - 1] + 2, s[i] === s[j]
// dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]), s[i] !== s[j]
function longestPalindromeSubseq(s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  // 注意循环顺序
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    const c1 = s[i];
    for (let j = i + 1; j < n; j++) {
      const c2 = s[j];
      if (c1 === c2) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}

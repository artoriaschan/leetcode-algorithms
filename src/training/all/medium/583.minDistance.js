// https://leetcode-cn.com/problems/delete-operation-for-two-strings/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 核心思路: 根据动态规划求出最长公共子串(1143)
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  // dp[i][j] 表示 text[0 : i] 和 text[0 : j] 的最长公共子序列的长度。
  // dp[i][0] = 0, 当 0 ≤ i ≤ m
  // dp[0][j] = 0, 当 0 ≤ j ≤ n
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    const c1 = word1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = word2[j - 1];
      if (c1 === c2) {
        // dp[i][j] = dp[i − 1][j − 1] + 1, 当 text1[i − 1] === text2[j - 1]
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // dp[i][j] = max(dp[i − 1][j], dp[i][j − 1]), 当 text1[i − 1] !== text2[j - 1]
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  const lcs = dp[m][n];
  return m - lcs + n - lcs;
}

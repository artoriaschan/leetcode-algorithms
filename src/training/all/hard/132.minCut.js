/**
 * @param {string} s
 * @return {number}
 */
function minCut(s) {
  const n = s.length;
  // 标注 [i...j] 是否是回文串
  const g = new Array(n).fill(0).map(() => new Array(n).fill(true));

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      g[i][j] = s[i] === s[j] && g[i + 1][j - 1];
    }
  }
  // dp[i] 代表 [0...i] 字符串分割回文子串的最小操作数
  const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < n; i++) {
    if (g[0][i]) {
      // 本身是回文串，无需分割
      dp[i] = 0;
    } else {
      for (let j = 0; j < i; j++) {
        // dp[i] = min(dp[i], dp[j] + 1), 其中 s[j + 1...i]为一个回文串
        if (g[j + 1][i]) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
  }

  return dp[n - 1];
}

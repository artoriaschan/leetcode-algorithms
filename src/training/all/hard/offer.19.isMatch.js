/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

function matches(s, p, i, j) {
  if (i === 0) return false;
  if (p[j - 1] === ".") return true;
  return s[i - 1] === p[j - 1];
}

function isMatch(s, p) {
  const m = s.length;
  const n = p.length;
  // dp[i][j] 表示 s 的前 i 个字符与 p 中的前 j 个字符是否能够匹配
  const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
  // 两者为空字符串，匹配
  dp[0][0] = true;
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // p 的第 j 个元素为 *
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2];
        // p的第 j - 1 个元素 (*前一位的元素) 是否与 s 的第 i 位元素相同
        if (matches(s, p, i, j - 1)) {
          // 此处意为 dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
          // dp[i][j - 2]：不匹配字符，将该组合扔掉，不再进行匹配。
          // dp[i - 1][j]：匹配 s 末尾的一个字符，将该字符扔掉，而该组合还可以继续进行匹配
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else if (matches(s, p, i, j)) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][n];
}

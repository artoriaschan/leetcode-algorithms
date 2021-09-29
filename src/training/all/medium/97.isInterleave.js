/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-29 14:45:37
 * @LastEditTime: 2021-09-29 15:32:16
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/interleaving-string/
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
//
function isInterleave(s1, s2, s3) {
  let n = s1.length;
  let m = s2.length;
  let t = s3.length;

  if (n + m !== t) return false;

  const dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(false));

  dp[0][0] = true;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      const p = i + j - 1;
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[p]);
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[p]);
      }
    }
  }
  return dp[n][m];
}

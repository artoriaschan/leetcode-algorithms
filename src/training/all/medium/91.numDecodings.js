/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-28 16:32:55
 * @LastEditTime: 2021-09-28 16:53:25
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/decode-ways/
 */
/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  const n = s.length;
  const f = new Array(n + 1).fill(0);
  f[0] = 1;
  for (let i = 1; i <= n; ++i) {
    if (s[i - 1] !== "0") {
      f[i] += f[i - 1];
    }
    if (i > 1 && s[i - 2] !== "0" && (s[i - 2] - "0") * 10 + (s[i - 1] - "0") <= 26) {
      f[i] += f[i - 2];
    }
  }
  return f[n];
}

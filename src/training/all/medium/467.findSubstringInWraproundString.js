/**
 * @param {string} p
 * @return {number}
 */
// 动态规划
// 我们可以定义 dp[α] 表示 p 中以字符 α 结尾且在 s 中的子串的最长长度，知道了最长长度，也就知道了不同的子串的个数。
function findSubstringInWraproundString(p) {
  const dp = new Array(26).fill(0);
  let k = 0;
  for (let i = 0; i < p.length; i++) {
    // 字符之差为 1 或 -25
    if (i > 0 && (p[i].charCodeAt() - p[i - 1].charCodeAt() + 26) % 26 === 1) {
      ++k;
    } else {
      k = 1;
    }
    const code = p[i].charCodeAt() - "a".charCodeAt();
    dp[code] = Math.max(dp[code], k);
  }
  return dp.reduce((prev, curr) => prev + curr);
}

// https://leetcode-cn.com/problems/integer-break/submissions/
/**
 * @param {number} n
 * @return {number}
 */
// 状态定义
// dp[i] 表示将正整数 ii 拆分成至少两个正整数的和
// 状态方程
// dp[i] = max(j × (i − j), j × dp[i − j])
function integerBreak(n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    let curMax = 0;
    for (let j = 1; j < i; j++) {
      curMax = Math.max(curMax, Math.max(j * (i - j), j * dp[i - j]));
    }
    dp[i] = curMax;
  }
  return dp[n];
}
// 优化动态规划
function integerBreak1(n) {
  if (n < 4) {
    return n - 1;
  }
  const dp = new Array(n + 1).fill(0);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(Math.max(2 * (i - 2), 2 * dp[i - 2]), Math.max(3 * (i - 3), 3 * dp[i - 3]));
  }
  return dp[n];
}

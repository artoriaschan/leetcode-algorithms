/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 * 思路:
 *  动态规划
 */
// eslint-disable-next-line no-unused-vars
function findLength(A, B) {
  const n = A.length;
  const m = B.length;
  const dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
  let ans = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : 0;
      ans = Math.max(ans, dp[i][j]);
    }
  }
  return ans;
}

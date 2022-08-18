/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
  const sum = nums.reduce((prev, cur) => prev + cur);
  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) return 0;
  const n = nums.length;
  const neg = diff / 2;
  const dp = Array.from(new Array(n + 1), () => new Array(neg + 1).fill(0));
  dp[0][0] = 1;

  // 如果 j < num，则不能选 num，此时有 dp[i][j] = dp[i - 1][j]；
  // 如果 j >= num，则如果不选 num，方案数是 dp[i - 1][j]，如果选 num，方案数是 dp[i - 1][j - num]，此时有 dp[i][j] = dp[i - 1][j] + dp[i - 1][j - num]。

  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1];
    for (let j = 0; j <= neg; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= num) {
        dp[i][j] += dp[i - 1][j - num];
      }
    }
  }

  return dp[n][neg];
}

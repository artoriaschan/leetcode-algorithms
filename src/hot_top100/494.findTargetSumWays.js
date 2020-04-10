/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * 思路:
 *  动态规划:
 *    状态定义: dp[i][j] 为用数组中的前 i 个元素，组成和为 j 的方案数。
 *    状态转移方程: dp[i][j] = dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]]
 *    basic case:
 *      dp[i][j + nums[i] + 1000] += dp[i - 1][j + 1000]
 *      dp[i][j - nums[i] + 1000] += dp[i - 1][j + 1000]
 */
// eslint-disable-next-line no-unused-vars
function findTargetSumWays(nums, S) {
  let dp = Array.from(new Array(nums.length), () => new Array(2001).fill(0));
  dp[0][nums[0] + 1000] = 1;
  dp[0][-nums[0] + 1000] += 1;
  for (let i = 1; i < nums.length; i++) {
    for (let sum = -1000; sum <= 1000; sum++) {
      if (dp[i - 1][sum + 1000] > 0) {
        dp[i][sum + nums[i] + 1000] += dp[i - 1][sum + 1000];
        dp[i][sum - nums[i] + 1000] += dp[i - 1][sum + 1000];
      }
    }
  }
  return S > 1000 ? 0 : dp[nums.length - 1][S + 1000];
}

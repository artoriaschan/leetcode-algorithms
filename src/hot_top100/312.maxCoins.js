/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  动态规划:
 *    状态定义:
 *      dp[left][right] 表示 left 到 right 区间获得最大的硬币数
 *    状态转移方程:
 *      dp[left][right] = Math.max(dp[left][right], nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right])
 */
// eslint-disable-next-line no-unused-vars
function maxCoins(nums) {
  let n = nums.length + 2;
  let newNums = new Array(n).fill(0);

  for (let i = 0; i < nums.length; i++) {
    newNums[i + 1] = nums[i];
  }

  newNums[0] = 1;
  newNums[n - 1] = 1;
  let dp = Array.from(new Array(n), () => new Array(n).fill(0));
  // 自底向上填充dp数组
  for (let left = n - 2; left > -1; left--)
    for (let right = left + 2; right < n; right++) {
      for (let i = left + 1; i < right; ++i)
        dp[left][right] = Math.max(
          dp[left][right],
          newNums[left] * newNums[i] * newNums[right] + dp[left][i] + dp[i][right]
        );
    }

  return dp[0][n - 1];
}

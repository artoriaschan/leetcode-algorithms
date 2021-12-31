// https://leetcode-cn.com/problems/partition-equal-subset-sum/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 状态定义
// 创建二维数组dp，包含n行target+1列，其中dp[i][j]表示从数组的[0,i]下标范围内选取若干个正整数（可以是 0 个），是否存在一种选取方案使得被选取的正整数的和等于 j。
// 状态转移方程
// dp[i][j] = dp[i − 1][j] ∣ dp[i − 1][j − nums[i]], j ≥ nums[i]
// dp[i][j] = dp[i − 1][j], j < nums[i]
function canPartition(nums) {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0;
  let maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = maxNum > num ? maxNum : num;
  }
  // 判断是否是奇数
  if (sum & 1) {
    return false;
  }
  const target = Math.floor(sum / 2);
  // 判断最大数超过总数一半
  if (maxNum > target) {
    return false;
  }
  const dp = new Array(n).fill(0).map(v => new Array(target + 1).fill(false));
  for (let i = 0; i < n; i++) {
    dp[i][0] = true;
  }
  dp[0][nums[0]] = true;
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    for (let j = 1; j <= target; j++) {
      if (j >= num) {
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n - 1][target];
}

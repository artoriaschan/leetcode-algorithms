// https://leetcode-cn.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
  if (nums == null || nums.length === 0) {
    return 0;
  }
  let length = nums.length;
  if (length === 1) {
    return nums[0];
  }
  let dp = new Array(length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[length - 1];
}

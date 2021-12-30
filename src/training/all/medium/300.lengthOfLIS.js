// https://leetcode-cn.com/problems/longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  if (nums.length === 0) {
    return 0;
  }
  // 定义 dp[i] 为考虑前 i 个元素，以第 i 个数字结尾的最长上升子序列的长度，注意 nums[i] 必须被选取
  let dp = new Array(nums.length).fill(0);
  dp[0] = 1;
  let maxans = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      // dp[i] = max(dp[j]) + 1, 其中 0 ≤ j < i 且 num[j] < num[i]
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    maxans = Math.max(maxans, dp[i]);
  }
  return maxans;
}

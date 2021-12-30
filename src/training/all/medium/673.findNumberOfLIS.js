// https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 状态定义
// 定义 dp[i] 表示以 nums[i] 结尾的最长上升子序列的长度
function findNumberOfLIS(nums) {
  let n = nums.length;
  let maxLen = 0;
  let ans = 0;
  const dp = new Array(n).fill(0);
  const cnt = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    dp[i] = 1;
    cnt[i] = 1;
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        // dp[i] = max(dp[j]) + 1, 其中 0 ≤ j < i 且 num[j] < num[i]
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          cnt[i] = cnt[j]; // 重置计数
        } else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j];
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      ans = cnt[i]; // 重置计数
    } else if (dp[i] === maxLen) {
      ans += cnt[i];
    }
  }
  return ans;
}

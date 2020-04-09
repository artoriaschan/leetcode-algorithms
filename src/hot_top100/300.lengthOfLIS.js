/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  动态规划:
 *    状态定义: dp[i]表示前i个元素中最长上升子序列的长度, 必须包含nums[i]
 *    状态转移方程: dp[i] = max(dp[j]) + 1,其中 0 ≤ j < i 且 num[j] < num[i]
 *  贪心 + 二分查找:
 *    如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小。
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-by-leetcode-soluti/
 */
// eslint-disable-next-line no-unused-vars
function lengthOfLIS(nums) {
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return 1;
  let dp = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], nums[i] > nums[j] ? dp[j] + 1 : 1);
    }
  }
  dp.sort((a, b) => b - a);
  return dp[0];
}

// eslint-disable-next-line no-unused-vars
function lengthOfLIS1(nums) {
  let len = 1;
  let n = nums.length;
  if (n === 0) return 0;
  let d = new Array(n + 1).fill(0);
  d[len] = nums[0];
  for (let i = 1; i < n; ++i) {
    if (nums[i] > d[len]) d[++len] = nums[i];
    else {
      let l = 1;
      let r = len;
      let pos = 0; // 如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      while (l <= r) {
        let mid = (l + r) >> 1;
        if (d[mid] < nums[i]) {
          pos = mid;
          l = mid + 1;
        } else r = mid - 1;
      }
      d[pos + 1] = nums[i];
    }
  }
  return len;
}

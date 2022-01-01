// https://leetcode-cn.com/problems/house-robber-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 假设偷窃房屋的下标范围是 [start, end]，用 dp[i] 表示在下标范围 [start, i] 内可以偷窃到的最高总金额
// dp[i] = max(dp[i − 2] + nums[i], dp[i − 1])
function rob(nums) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  }
  if (length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
}

function robRange(nums, start, end) {
  // 使用滚动数组, 降低空间复杂度
  let first = nums[start];
  let second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
}

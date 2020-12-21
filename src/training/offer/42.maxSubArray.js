/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  const len = nums.length;
  let max = nums[0];
  for (let i = 1; i < len; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    max = Math.max(max, nums[i]);
  }
  return max;
}

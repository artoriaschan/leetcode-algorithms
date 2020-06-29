/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

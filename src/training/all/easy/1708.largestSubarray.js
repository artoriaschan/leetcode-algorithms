/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function largestSubarray(nums, k) {
  const len = nums.length;
  let mark = [-Infinity, 0];
  for (let i = 0; i <= len - k; i++) {
    if (nums[i] > mark[0]) {
      mark[0] = nums[i];
      mark[1] = i;
    }
  }
  return nums.slice(mark[1], mark[1] + k);
}

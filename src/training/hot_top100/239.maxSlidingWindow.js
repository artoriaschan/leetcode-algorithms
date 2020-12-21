/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function maxSlidingWindow(nums, k) {
  let ans = [];
  for (let i = 0; i < nums.length - k; i++) {
    let max = nums[i];
    for (let j = 1; j < k; j++) {
      if (nums[i + j] > max) {
        max = nums[i + j];
      }
    }
    ans.push(max);
  }
  return ans;
}

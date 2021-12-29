// https://leetcode-cn.com/problems/maximum-product-subarray/
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let maxF = nums[0];
  let minF = nums[0];
  let ans = nums[0];
  let length = nums.length;
  for (let i = 1; i < length; ++i) {
    let mx = maxF;
    let mn = minF;
    maxF = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
    minF = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
    ans = Math.max(maxF, ans);
  }
  return ans;
}

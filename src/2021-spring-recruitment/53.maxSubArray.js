/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
function maxSubArray(nums) {
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach(x => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
}

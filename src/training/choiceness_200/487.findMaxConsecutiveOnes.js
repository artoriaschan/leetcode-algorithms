/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  动态规划
 */
// eslint-disable-next-line no-unused-vars
function findMaxConsecutiveOnes(nums) {
  let n = nums.length;
  let ans = 0;
  let dp0 = 0;
  let dp1 = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === 1) {
      dp1++;
      dp0++;
    } else {
      dp1 = dp0 + 1;
      dp0 = 0;
    }
    ans = Math.max(ans, Math.max(dp0, dp1));
  }
  return ans;
}

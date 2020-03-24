/**
 * @param {number[]} nums
 * @return {number}
 *  思路:
 *    动态规划: dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]), 思路同17.16
 */
// eslint-disable-next-line no-unused-vars
function rob(nums) {
  let prevMax = 0;
  let currMax = 0;
  for (let num of nums) {
    let temp = currMax;
    currMax = Math.max(prevMax + num, currMax);
    prevMax = temp;
  }
  return currMax;
}

/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  1. 动态规划
 *    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
 *  2. 优化
 *    利用变量存储, 不使用dp数组
 */
// eslint-disable-next-line no-unused-vars
function massage(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  let dp = new Array(len + 1).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[len - 1];
}
// eslint-disable-next-line no-unused-vars
function massageOptimization(nums) {
  let prev = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr = Math.max(max, prev + nums[i]);
    prev = max;
    max = curr;
  }
  return max;
}

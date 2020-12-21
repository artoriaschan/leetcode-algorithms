/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/0-1-bei-bao-wen-ti-xiang-jie-zhen-dui-ben-ti-de-yo/
 * 思路:
 *  动态规划: 0-1背包问题
 *    该问题可以转换为是否可以从这个数组中挑选出一些正整数，使得这些数的和等于整个数组元素的和的一半。前提条件是：数组的和一定得是偶数，即数组的和一定得被 2 整除，这一点是特判。
 *    状态定义: d[i][j]:表示从数组的 [0, i] 这个子区间内挑选一些正整数，每个数只能用一次，使得这些数的和恰好等于 j。
 *    状态转移方程:
 *      dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
 *      dp[i][j] = true // nums[i] === j
 *    basic case:
 *      dp[0][0] = false
 *      dp[0][nums[0]] = true
 */
// eslint-disable-next-line no-unused-vars
function canPartition(nums) {
  let len = nums.length;
  if (len === 0) {
    return false;
  }
  let sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 > 0) return false;
  let target = sum / 2;
  let dp = Array.from(new Array(len), () => new Array(target + 1).fill(false));
  // 先填表格第 0 行，第 1 个数只能让容积为它自己的背包恰好装满
  if (nums[0] <= target) {
    dp[0][nums[0]] = true;
  }
  // 再填表格后面几行
  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= target; j++) {
      // 直接从上一行先把结果抄下来，然后再修正
      dp[i][j] = dp[i - 1][j];

      if (nums[i] === j) {
        dp[i][j] = true;
        continue;
      }
      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  return dp[len - 1][target];
}

/**
 * @param {number} n
 * @return {number}
 * https://leetcode-cn.com/problems/perfect-squares/solution/wan-quan-ping-fang-shu-by-leetcode/
 * 思路:
 *  暴力枚举: numSquares(n)=min(numSquares(n-k) + 1) ∀k ∈ square numbers
 *  动态规划: 几乎所有的动态规划解决方案，首先会创建一个一维或多维数组 DP 来保存中间子解的值，以及通常数组最后一个值代表最终解
 *    首先初始化长度为n+1的数组dp，每个位置都为0
 *    如果n为0，则结果为0
 *    对数组进行遍历，下标为i，每次都将当前数字先更新为最大的结果，即dp[i]=i，比如i=4，最坏结果为4=1+1+1+1即为4个数字
 *    动态转移方程为：dp[i] = MIN(dp[i], dp[i - j * j] + 1)，i表示当前数字，j*j表示平方数
 */
// eslint-disable-next-line no-unused-vars
function numSquares(n) {
  const dp = new Array(n + 1).fill(0); // 数组长度为n+1，值均为0
  for (let i = 1; i <= n; i++) {
    dp[i] = i; // 最坏的情况就是每次+1
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
    }
  }
  return dp[n];
}

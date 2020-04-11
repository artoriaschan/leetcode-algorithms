/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 * https://leetcode-cn.com/problems/super-egg-drop/solution/ji-dan-diao-luo-by-leetcode-solution/
 * 思路:
 *  动态规划 + 二分搜索: 题的标准解法为动态规划
 *    状态定义: dp[i][j] 有i个鸡蛋，j次扔鸡蛋的测得的最多楼层
 *    状态转移方程: dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1] + 1
 *      dp[i - 1][j - 1] => 当前楼层鸡蛋碎了
 *      dp[i][j - 1] => 当前楼层鸡蛋没碎
 *    一维优化版: dp[i] = dp[i-1] + dp[i] + 1
 */
// eslint-disable-next-line no-unused-vars
function superEggDrop(K, N) {
  let dp = Array(K + 1).fill(0);
  let cnt = 0;
  while (dp[K] < N) {
    cnt++;
    for (let i = K; i > 0; i--) {
      dp[i] = dp[i - 1] + dp[i] + 1;
    }
  }
  return cnt;
}

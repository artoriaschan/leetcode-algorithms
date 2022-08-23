/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
// 动态规划 + 二分查找
// dp[k][m] = n，当前有 k 个鸡蛋，可以尝试扔 m 次鸡蛋, 确定的最高楼层数
// https://leetcode.cn/problems/super-egg-drop/solution/87-ji-dan-diao-luo-by-xing-guang-29-of5e/
function superEggDrop(K, N) {
  const dp = Array.from(Array(K + 1), () => Array(N + 1).fill(0));

  let m = 0;
  // 当可确定的楼层大于等于最大楼层时 跳出循环
  while (dp[K][m] < N) {
    m++;
    for (let k = 1; k <= K; ++k) {
      // dp[k][m - 1]: 鸡蛋没碎， 白测试一次
      // dp[k - 1][m - 1] + 1： 鸡蛋碎，我们多检测了摔碎的这一层
      dp[k][m] = dp[k][m - 1] + dp[k - 1][m - 1] + 1;
    }
  }
  return m;
}

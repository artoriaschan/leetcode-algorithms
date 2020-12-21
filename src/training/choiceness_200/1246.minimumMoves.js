/**
 * @param {number[]} arr
 * @return {number}
 * 思路:
 *  区间动态规划
 *  dp[i][j]:
 *    代表子串 arr[i..j](下标从i到j) 的最小次数
 *  状态转移方程:
 *    1. 这个区间最小的删除方案是先删除[i, k]再删除[k + 1, j]， 其中 i <= k < j.
 *      if(dp[i][i + len] > dp[i][i + k] + dp[i + k + 1][i + len]) dp[i][i + len] = dp[i][i + k] + dp[i + k + 1][i + len];
 *    2. 这个区间最小的删除方案是先剔除其中的部分元素，再作为一个回文串一并删除。
 *      if(arr[i] == arr[i + len] && dp[i][i + len] > dp[i + 1][i + len - 1]) dp[i][i + len] = dp[i + 1][i + len - 1];
 *  初始状态:
 *    dp[i][i] = 1
 *    dp[i][i + 1] = arr[i] === arr[i + 1] ? 1 : 2
 */
// eslint-disable-next-line no-unused-vars
function minimumMoves(arr) {
  const len = arr.length;
  let dp = Array.from(new Array(len), () => new Array(len).fill(0));

  // Init
  // 完成长度为1和2的子串的情况
  for (let i = 0; i < len; i++) dp[i][i] = 1;
  for (let i = 0; i < len - 1; i++) dp[i][i + 1] = arr[i] === arr[i + 1] ? 1 : 2;
  // Loop
  // i为开始点，j为结束点
  for (let j = 2; j < len; j++) {
    for (let i = j - 2; i >= 0; i--) {
      // 记录最小值的中间变量，这么写速度会快些
      let min = len;
      // 回文的情况
      if (arr[i] === arr[j]) min = dp[i + 1][j - 1];
      // k为中间点
      for (let k = i; k < j; k++) {
        min = Math.min(min, dp[i][k] + dp[k + 1][j]);
      }
      dp[i][j] = min;
    }
  }
  return dp[0][len - 1];
}

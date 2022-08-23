/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
function splitArray(nums, m) {
  const n = nums.length;
  // dp[i][j] 表示前 i 个数分成 j 组的最小的最大值和
  // 初始状态: dp[0][0] = 0
  // 状态转移方程: dp[i][j] = min(dp[i][j], max(dp[k][j - 1], sub(k + 1, i)))，其中 0 <= k < i
  // 对于 i < j 的不合法情况，需要将dp数组的默认值为一个很大的数
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(Number.MAX_SAFE_INTEGER));
  dp[0][0] = 0;

  const sub = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sub[i + 1] = sub[i] + nums[i];
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      for (let k = 0; k < i; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sub[i] - sub[k]));
      }
    }
  }

  return dp[n][m];
}

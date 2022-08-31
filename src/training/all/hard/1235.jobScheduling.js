/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
function jobScheduling(startTime, endTime, profit) {
  const summary = [];
  const n = startTime.length;
  // 汇总信息
  for (let i = 0; i < n; i++) {
    summary.push([startTime[i], endTime[i], profit[i]]);
  }
  // 按照结束时间排序
  summary.sort((a, b) => a[1] - b[1]);
  // dp[i] 表示前 i 个兼职可获得的最大报酬
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    // 二分查找，找出小于但接近 i 兼职的开始时间的兼职的最大收益下标
    let left = 0;
    let right = i - 1;
    while (left < right) {
      const mid = (left + right) >> 1;
      if (summary[mid][1] <= summary[i - 1][0]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // 对于某个兼职，只有做与不做，找出其最大值
    // 做当前的兼职：dp[i] = dp[prev] + profit[i - 1]，prev 为小于但接近第 i 兼职的开始时间的兼职的最大收益下标
    // 不做当前兼职：dp[i] = dp[i - 1]
    dp[i] = Math.max(dp[i - 1], dp[left] + summary[i - 1][2]);
  }
  return dp[n];
}

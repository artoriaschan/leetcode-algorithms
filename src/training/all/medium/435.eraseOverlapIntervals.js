/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  const n = intervals.length;
  if (n === 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);

  // dp[i] 表示以区间 i 为最后一个区间，可以选出的区间数量的最大值
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // 第 j 个区间的右端点 rj 没有越过第 i 个区间的左端点 li, 状态转移
      if (intervals[j][1] <= intervals[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return n - Math.max(...dp);
}

function eraseOverlapIntervals1(intervals) {
  const n = intervals.length;
  if (n === 0) return 0;

  // 按照右端点由小到大排序
  intervals.sort((a, b) => a[1] - b[1]);

  let right = intervals[0][1];
  let ans = 1;
  for (let i = 1; i < n; ++i) {
    // 只要找出其中与首个区间不重合并且右端点最小的区间即可，我们就可以贪心地选择这个区间，并将 right 更新为 ri
    if (intervals[i][0] >= right) {
      ++ans;
      right = intervals[i][1];
    }
  }
  return n - ans;
}

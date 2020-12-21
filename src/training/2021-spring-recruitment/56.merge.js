/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 排序
function merge(intervals) {
  if (intervals.length === 0) return [];
  let res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  res.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    // 新区间的开始 > 已合并区间的结束, 将新区间放入合并区间集中
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i]);
      // 新区间的结束 > 已合并区间的结束, 更新合并区间的结束
    } else if (intervals[i][1] > res[res.length - 1][1]) {
      res[res.length - 1][1] = intervals[i][1];
    }
  }
  return res;
}

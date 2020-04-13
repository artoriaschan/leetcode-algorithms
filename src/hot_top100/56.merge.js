/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 思路:
 *  排序
 *  连通块?:https://leetcode-cn.com/problems/merge-intervals/solution/he-bing-qu-jian-by-leetcode/
 */
// eslint-disable-next-line no-unused-vars
function merge(intervals) {
  let len = intervals.length;
  if (len <= 1) return intervals;
  // 根据区间首元素排序
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < len; i++) {
    const first = intervals[i - 1];
    const last = intervals[i];
    if (last[0] <= first[1]) {
      const newInterval = [Math.min(first[0], last[0]), Math.max(first[1], last[1])];
      intervals.splice(i - 1, 2, newInterval);
      i -= 1;
      len = intervals.length;
    }
  }
  return intervals;
}

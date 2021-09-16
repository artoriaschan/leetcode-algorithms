/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-16 14:25:05
 * @LastEditTime: 2021-09-16 15:51:17
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/insert-interval/
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  let [start, end] = newInterval;
  let placed = false;
  const ans = [];
  for (let i = 0; i < intervals.length; i++) {
    const item = intervals[i];
    if (item[0] > end) {
      if (!placed) {
        ans.push([start, end]);
        placed = true;
      }
      ans.push(item);
    } else if (item[1] < start) {
      ans.push(item);
    } else {
      start = Math.min(start, item[0]);
      end = Math.max(end, item[1]);
    }
  }
  if (!placed) {
    ans.push([start, end]);
  }
  return ans;
}

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][0] === intervals[i + 1][0]) return false;
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }
  return true;
}

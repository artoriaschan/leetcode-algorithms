/**
 * @param {number[][]} points
 * @return {number}
 */
function minTimeToVisitAllPoints(points) {
  let res = 0;
  for (let i = 1; i < points.length; i++) {
    let last = points[i - 1];
    let cur = points[i];
    let diff = Math.max(Math.abs(cur[0] - last[0]), Math.abs(cur[1] - last[1]));
    res += diff;
  }
  return res;
}

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
console.log(minTimeToVisitAllPoints(points));

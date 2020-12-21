/**
 * @param {number[][]} arrays
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function maxDistance(arrays) {
  let max = -Infinity;
  let min = +Infinity;
  let res = 0;
  for (let i = 0; i < arrays.length; i++) {
    let tmpMin = arrays[i][0];
    let tmpMax = arrays[i][arrays[i].length - 1];
    res = Math.max(max - tmpMin, tmpMax - min, res);
    max = Math.max(max, tmpMax);
    min = Math.min(min, tmpMin);
  }
  return res;
}

/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 * 思路:
 *  https://leetcode-cn.com/problems/intersection-lcci/solution/jiao-dian-by-leetcode-solution/
 */
// eslint-disable-next-line no-unused-vars
function intersection(start1, end1, start2, end2) {
  let k1 = null;
  let b1 = null;
  let k2 = null;
  let b2 = null;
  if (end1[0] - start1[0] !== 0) k1 = (end1[1] - start1[1]) / (end1[0] - start1[0]);
  if (k1 !== null) b1 = start1[1] - k1 * start1[0];
  if (end2[0] - start2[0] !== 0) k2 = (end2[1] - start2[1]) / (end2[0] - start2[0]);
  if (k2 !== null) b2 = start2[1] - k2 * start2[0];
  if (k1 === null && k2 === null) {
    if (
      start1[0] === start2[0] &&
      Math.min(start1[1], end1[1]) <= Math.max(start2[1], end2[1]) &&
      Math.min(start2[1], end2[1]) <= Math.max(start1[1], end1[1])
    )
      return [start1[0], Math.max(Math.min(start1[1], end1[1]), Math.min(start2[1], end2[1]))];
  } else if (k1 === null) {
    let y = k2 * start1[0] + b2;
    if ((start2[1] - y) * (end2[1] - y) <= 0) return [start1[0], y];
  } else if (k2 === null) {
    let y = k1 * start2[0] + b1;
    if ((start1[1] - y) * (end1[1] - y) <= 0) return [start2[0], y];
  } else {
    if (
      k1 === k2 &&
      b1 === b2 &&
      Math.min(start1[1], end1[1]) <= Math.max(start2[1], end2[1]) &&
      Math.min(start2[1], end2[1]) <= Math.max(start1[1], end1[1])
    ) {
      return [
        Math.max(Math.min(start1[0], end1[0]), Math.min(start2[0], end2[0])),
        Math.max(Math.min(start1[1], end1[1]), Math.min(start2[1], end2[1])),
      ];
    }
    if (k1 !== k2) {
      let x = (b2 - b1) / (k1 - k2);
      let y = k1 * x + b1;
      if ((start2[1] - y) * (end2[1] - y) <= 0 && (start1[1] - y) * (end1[1] - y) <= 0) return [x, y];
    }
  }
  return [];
}

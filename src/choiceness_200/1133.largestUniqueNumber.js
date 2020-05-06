/**
 * @param {number[]} A
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function largestUniqueNumber(A) {
  let map = new Map();
  for (let a of A) {
    if (map.has(a)) map.set(a, map.get(a) + 1);
    else map.set(a, 1);
  }
  let max = -1;
  for (let [k, v] of map.entries()) {
    if (k > max && v === 1) max = k;
  }
  return max;
}

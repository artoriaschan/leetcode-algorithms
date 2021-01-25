/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
function arraysIntersection(arr1, arr2, arr3) {
  const map = new Map();
  const total = [].concat(arr1, arr2, arr3);
  const len = total.length;
  for (let i = 0; i < len; i++) {
    if (map.has(total[i])) {
      map.set(total[i], map.get(total[i]) + 1);
    } else {
      map.set(total[i], 1);
    }
  }
  const res = [];
  for (const [key, value] of map.entries()) {
    if (value === 3) res.push(key);
  }
  return res;
}

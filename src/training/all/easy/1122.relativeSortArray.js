/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
  const map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (map.has(arr1[i])) {
      map.set(arr1[i], map.get(arr1[i]) + 1);
    } else {
      map.set(arr1[i], 1);
    }
  }
  const res = [];
  for (let num of arr2) {
    const count = map.get(num);
    for (let i = 0; i < count; i++) {
      res.push(num);
    }
    map.delete(num);
  }
  const rest = Array.from(map.keys()).sort((a, b) => a - b);
  for (let num of rest) {
    const count = map.get(num);
    for (let i = 0; i < count; i++) {
      res.push(num);
    }
  }
  return res;
}

/**
 * @param {number[][]} items
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
function highFive(items) {
  const map = new Map();
  const ans = [];
  for (let i = 0; i < items.length; i++) {
    if (map.has(items[i][0])) {
      let arr = map.get(items[i][0]);
      arr.push(items[i][1]);
      map.set(items[i][0], arr);
    } else {
      map.set(items[i][0], [items[i][1]]);
    }
  }
  for (let [k, v] of map.entries()) {
    v.sort((a, b) => b - a);
    v.splice(5);
    let average = Math.floor(v.reduce((a, b) => a + b, 0) / v.length);
    ans.push([k, average]);
  }
  return ans;
}

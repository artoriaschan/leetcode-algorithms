/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
  const res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(Math.max(...arr.slice(i + 1)));
  }
  res.push(-1);
  return res;
}

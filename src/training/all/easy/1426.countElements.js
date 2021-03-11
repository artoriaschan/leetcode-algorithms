/**
 * @param {number[]} arr
 * @return {number}
 */
function countElements(arr) {
  const set = new Set();
  for (let num of arr) {
    set.add(num);
  }
  let res = 0;
  for (let num of arr) {
    if (set.has(num + 1)) res++;
  }
  return res;
}

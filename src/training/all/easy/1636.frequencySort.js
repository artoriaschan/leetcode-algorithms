/**
 * @param {number[]} nums
 * @return {number[]}
 */
function frequencySort(nums) {
  const map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  const res = nums.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      return b - a;
    }
    return map.get(a) - map.get(b);
  });
  return res;
}

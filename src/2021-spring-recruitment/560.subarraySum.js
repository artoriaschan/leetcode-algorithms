/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 哈希表 + 前缀和
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let res = 0;
  for (let item of nums) {
    sum += item;
    const key = sum - k;
    const same = map.has(key) ? map.get(key) : 0;
    res += same;
    map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
  }
  return res;
}

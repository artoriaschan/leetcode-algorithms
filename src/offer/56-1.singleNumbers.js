/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 要求时间复杂度是O(n)，空间复杂度是O(1)。
function singleNumbers(nums) {
  let tmp = 0;
  for (let num of nums) {
    tmp ^= num;
  }
  let div = 1;
  while ((div & tmp) === 0) {
    div <<= 1;
  }
  let a = 0;
  let b = 0;
  for (let num of nums) {
    if ((div & num) === 0) {
      a ^= num;
    } else {
      b ^= num;
    }
  }
  return [a, b];
}

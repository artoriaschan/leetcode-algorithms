/**
 * @param {number[]} nums
 * @return {number}
 * 位运算 异或
 * a ^ 0 === a
 * a ^ a === 0
 * a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b
 */
function singleNumber(nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
}

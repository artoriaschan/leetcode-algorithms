/**
 * @param {number[]} nums
 * @param {number} K
 * @return {boolean}
 * 思路:
 *  https://leetcode-cn.com/problems/divide-array-into-increasing-sequences/solution/jiang-shu-zu-fen-cheng-ji-ge-di-zeng-xu-lie-by-lee/
 */
// eslint-disable-next-line no-unused-vars
function canDivideIntoSubsequences(nums, K) {
  let pre = nums[0];
  let cnt = 0;
  for (let n of nums) {
    if (n === pre) ++cnt;
    else {
      pre = n;
      cnt = 1;
    }
    if (cnt * K > nums.length) return false;
  }
  return true;
}

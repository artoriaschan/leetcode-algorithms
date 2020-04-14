/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 思路:
 *  二分查找:
 *    当nums[0] > target && target > nums[M]时 L = M + 1 => 旋转小于一半数量的较大元素
 *    当nums[M] >= nums[0] && (target > nums[M] || nums[0] > target)时 L = M + 1 => 旋转大于一半数量的较大元素
 *    其他情况就是 R = M;
 */
// eslint-disable-next-line no-unused-vars
function search(nums, target) {
  let L = 0;
  let R = nums.length - 1;
  while (L < R) {
    let M = (L + R) >> 1;
    // if((target < nums[0] && target > nums[M])^(nums[0] <= nums[M] && target > nums[M])^(nums[0] <= nums[M] &&target < nums[0])) {
    //     L = M + 1
    // }else {
    //     R = M
    // }
    if (target < nums[0] && target > nums[M]) {
      L = M + 1;
    } else if (nums[0] <= nums[M] && (target > nums[M] || target < nums[0])) {
      L = M + 1;
    } else {
      R = M;
    }
  }
  return L === R && nums[L] === target ? L : -1;
}

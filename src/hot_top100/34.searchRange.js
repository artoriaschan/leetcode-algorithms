/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 思路:
 *  二分查找
 */
// eslint-disable-next-line no-unused-vars
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let startIndex = -1;
  let endIndex = -1;
  while (left <= right) {
    if (nums[left] !== target) {
      left++;
    }
    if (nums[right] !== target) {
      right--;
    }
    if (nums[right] === target && nums[left] === target) {
      startIndex = left;
      endIndex = right;
      break;
    }
  }
  return [startIndex, endIndex];
}

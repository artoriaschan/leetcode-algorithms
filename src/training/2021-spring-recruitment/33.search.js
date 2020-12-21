/* eslint-disable no-lonely-if */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找
function search(nums, target) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    // [l,mid]有序
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // [mid,r] 有序
      if (nums[mid] < target && target <= nums[len - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const num = nums[mid];
    if (num === target) return mid;
    if (num > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

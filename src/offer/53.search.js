/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 解法一 依次遍历
// 解法二 二分查找，找到左右边界
function search(nums, target) {
  return bsearch(nums, target) - bsearch(nums, target - 1);
}

function bsearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

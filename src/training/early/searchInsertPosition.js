/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 二分查找
 */
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target);
  if (index > -1) {
    return index;
  }
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.ceil((right + left) / 2);
  while (left < right) {
    console.log(left, middle, right);
    if (nums[middle] > target) {
      right = middle - 1;
      middle = Math.ceil((right + left) / 2);
    } else if (nums[middle] < target) {
      left = middle;
      middle = Math.ceil((right + left) / 2);
    }
  }
  if (nums[middle] < target) {
    return middle + 1;
  }
  return middle;
};

let nums = [1, 3, 5, 6];
let target = 2;
console.log(searchInsert(nums, target));

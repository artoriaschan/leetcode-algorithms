/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 双指针
function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else {
      return [nums[start], nums[end]];
    }
  }
}

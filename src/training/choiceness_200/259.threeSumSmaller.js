/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 思路:
 *  双指针
 */
// eslint-disable-next-line no-unused-vars
function threeSumSmaller(nums, target) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    sum += twoSumSmaller(nums, i + 1, target - nums[i]);
  }
  return sum;
}
function twoSumSmaller(nums, startindex, target) {
  let sum = 0;
  let left = startindex;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      // 当right为下标为 (left, right] 区间的值时, 都是小于target的, 故 sum 应加上 right - left
      sum += right - left;
      left++;
    } else {
      right--;
    }
  }
  return sum;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 最好是仅使用常数空间的一趟扫描算法
 * 思路:
 *  使用计数排序的两趟扫描算法
 *  一次遍历: 我们用三个指针（p0, p2 和curr）来分别追踪0的最右边界，2的最左边界和当前考虑的元素。
 *    若nums[curr] = 0，则将其与 nums[p0]互换；若 nums[curr] = 2 ，则与 nums[p2]互换。
 */
// eslint-disable-next-line no-unused-vars
function sortColors(nums) {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;
  while (i <= right) {
    while (nums[i] === 2 && i < right) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
    }
    while (nums[i] === 0 && i > left) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
    i++;
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路:
 *  1. 排序后两两交换
 *  2. 一遍交换
 */
// eslint-disable-next-line no-unused-vars
function wiggleSort(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length - 1; i += 2) {
    swap(nums, i, i + 1);
  }
}
function swap(nums, x, y) {
  [nums[x], nums[y]] = [nums[y], nums[x]];
}
// eslint-disable-next-line no-unused-vars
function wiggleSort1(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    // 令 (i % 2 == 0) && nums[i] > nums[i + 1]) || ((i % 2 == 1) && nums[i] < nums[i + 1] 等于 (p ^ q) v (!p ^ !q)
    // 用人话说就是: 要么pq同真 要么pq同假 -> 那么 p 等于 q 因为真等于真 或者 假等于假 而这 已经涵盖了全部 即等于 (i % 2 == 0) == (nums[i] > nums[i + 1])
    // 也就是 q == p pq命题是逻辑等价的 而(p ^ q) v (!p ^ !q) 和 q == p也是逻辑等价的 所以能互换.
    if ((i % 2 === 0) === nums[i] > nums[i + 1]) {
      swap(nums, i, i + 1);
    }
  }
}

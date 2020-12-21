/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  动态规划:
 *    imax = max(imax * nums[i], nums[i])
 *    imin = min(imin * nums[i], nums[i]): 由于存在负数，那么会导致最大的变最小的，最小的变最大的。
 *    当负数出现时则imax与imin进行交换再进行下一步计算
 */
// eslint-disable-next-line no-unused-vars
function maxProduct(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  let max = Number.MIN_VALUE;
  let imax = 1;
  let imin = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) [imax, imin] = [imin, imax];
    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);
    max = Math.max(max, imax);
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  排序, 然后与原数组对比
 *  使用栈
 */
// eslint-disable-next-line no-unused-vars
function findUnsortedSubarray(nums) {
  let numsSorted = Object.assign([], nums);
  numsSorted.sort((a, b) => a - b);
  let first = numsSorted.length;
  let last = 0;
  for (let i = 0; i < numsSorted.length; i++) {
    if (numsSorted[i] !== nums[i]) {
      first = Math.min(first, i);
      last = Math.max(last, i);
    }
  }
  return last - first >= 0 ? last - first + 1 : 0;
}

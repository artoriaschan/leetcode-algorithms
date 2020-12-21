/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 * 思路:
 *  二分查找
 */
// eslint-disable-next-line no-unused-vars
function search(reader, target) {
  if (reader.get(0) === target) return 0;

  // 搜索边界
  let left = 0;
  let right = 1;
  while (reader.get(right) < target) {
    left = right;
    right <<= 1;
  }

  // 二分搜索
  let pivot;
  let num;
  while (left <= right) {
    pivot = left + ((right - left) >> 1);
    num = reader.get(pivot);

    if (num === target) return pivot;
    if (num > target) right = pivot - 1;
    else left = pivot + 1;
  }
  return -1;
}

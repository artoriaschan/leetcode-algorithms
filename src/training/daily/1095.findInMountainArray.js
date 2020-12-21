/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 * 思路:
 *  二分查找
 */
function binarySearch(mountainArr, target, l, r, key) {
  target = key(target);
  while (l <= r) {
    let mid = (l + r) >> 1;
    let cur = key(mountainArr.get(mid));
    if (cur === target) return mid;
    if (cur < target) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}

// eslint-disable-next-line no-unused-vars
function findInMountainArray(target, mountainArr) {
  let l = 0;
  let r = mountainArr.length() - 1;
  while (l < r) {
    let mid = (l + r) >> 1;
    if (mountainArr.get(mid) < mountainArr.get(mid + 1)) l = mid + 1;
    else r = mid;
  }

  let peak = l;
  let index = binarySearch(mountainArr, target, 0, peak, x => x);
  if (index !== -1) return index;
  return binarySearch(mountainArr, target, peak + 1, mountainArr.length() - 1, x => -x);
}

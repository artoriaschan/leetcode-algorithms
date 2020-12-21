/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 思路:
 *  排序
 *  堆: 创建最小堆, 遍历完后堆顶为第k大的元素
 *  快速选择:
 */
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
function findKthLargest1(nums, k) {
  function quickSelect(left, right, k) {
    if (left === right) return nums[left];
    let pivotIndex = left;
    pivotIndex = partition(left, right, pivotIndex);
    if (k === pivotIndex) return nums[k];
    // go left side
    if (k < pivotIndex) return quickSelect(left, pivotIndex - 1, k);
    // go right side
    return quickSelect(pivotIndex + 1, right, k);
  }
  function partition(left, right, pivotIndex) {
    let pivot = nums[pivotIndex];
    // 1. move pivot to end
    swap(pivotIndex, right);
    let storeIndex = left;
    // 2. move all smaller elements to the left
    for (let i = left; i <= right; i++) {
      if (nums[i] < pivot) {
        swap(storeIndex, i);
        storeIndex++;
      }
    }
    // 3. move pivot to its final place
    swap(storeIndex, right);

    return storeIndex;
  }
  function swap(x, y) {
    let tmp = nums[x];
    nums[x] = nums[y];
    nums[y] = tmp;
  }
  let size = nums.length;
  // kth largest is (N - k)th smallest
  return quickSelect(0, size - 1, size - k);
}

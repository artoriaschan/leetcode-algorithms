/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序
function majorityElement(nums) {
  quickSort(nums);
  return nums[(0 + nums.length) >> 1];
}
function quickSort(nums) {
  quickSortInternally(nums, 0, nums.length - 1);
}
function quickSortInternally(nums, left, right) {
  if (left >= right) return;
  let pivotIndex = partition(nums, left, right);
  quickSortInternally(nums, left, pivotIndex - 1);
  quickSortInternally(nums, pivotIndex + 1, right);
}
function partition(nums, left, right) {
  const pivot = nums[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (nums[j] < pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
}
// 哈希计数
function majorityElement1(nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [item, count] of map.entries()) {
    if (count > nums.length >> 1) return item;
  }
}
// 摩尔投票
function majorityElement2(nums) {
  let cur = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      cur = nums[i];
    }
    if (cur !== nums[i]) count--;
    else count++;
  }
  return cur;
}

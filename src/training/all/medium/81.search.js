/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-24 12:00:21
 * @LastEditTime: 2021-09-24 19:11:35
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
 */
/**
 * 二分查找, 判断边界
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
  const n = nums.length;
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return nums[0] === target;
  }
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      ++l;
      --r;
    } else if (nums[l] <= nums[mid]) {
      // 逆转的在左侧
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (nums[mid] < target && target <= nums[n - 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}

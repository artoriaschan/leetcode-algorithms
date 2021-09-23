/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-23 15:18:26
 * @LastEditTime: 2021-09-23 15:30:06
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/sort-colors/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums) {
  const len = nums.length;
  let ptr = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      swap(nums, i, ptr);
      ptr++;
    }
  }
  for (let i = ptr; i < len; i++) {
    if (nums[i] === 1) {
      swap(nums, i, ptr);
      ptr++;
    }
  }
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

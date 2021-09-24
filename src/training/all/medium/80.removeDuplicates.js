/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-24 11:29:12
 * @LastEditTime: 2021-09-24 11:58:12
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let i = 1;
  let prev = nums[0];
  let count = 1;
  while (i < nums.length) {
    const cur = nums[i];
    if (cur === prev) {
      if (count >= 2) {
        nums.splice(i, 1);
      } else {
        count++;
        i++;
      }
    } else {
      prev = cur;
      count = 1;
      i++;
    }
  }
  return nums.length;
}

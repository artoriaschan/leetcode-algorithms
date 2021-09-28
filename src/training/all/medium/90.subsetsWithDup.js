/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-28 16:15:23
 * @LastEditTime: 2021-09-28 16:32:18
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/subsets-ii/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsetsWithDup(nums) {
  // 先将数组排序
  nums.sort((a, b) => a - b);
  const ans = [];
  backtrack(false, 0, nums, ans, []);
  return ans;
}

function backtrack(choosePre, index, nums, ans, temp) {
  if (index === nums.length) {
    ans.push(temp);
    return;
  }

  backtrack(false, index + 1, nums, ans, temp.slice());

  // 迭代时，若发现没有选择上一个数，且当前数字与上一个数相同，则可以跳过当前生成的子集
  if (!choosePre && index > 0 && nums[index - 1] === nums[index]) {
    return;
  }

  temp.push(nums[index]);
  backtrack(true, index + 1, nums, ans, temp.slice());
  temp.pop();
}

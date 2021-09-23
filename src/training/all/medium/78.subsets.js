/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-23 17:41:05
 * @LastEditTime: 2021-09-23 18:12:24
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/subsets/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const ans = [];
  backtrack(0, nums, ans, []);
  return ans;
}

function backtrack(index, nums, ans, temp) {
  ans.push(temp);
  for (let i = index; i < nums.length; i++) {
    temp.push(nums[i]);
    backtrack(i + 1, nums, ans, temp.slice());
    temp.pop();
  }
}

console.log(subsets([1, 2, 3]));

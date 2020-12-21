/* eslint-disable no-unused-vars */
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 全排列/组合/子集问题，它们比较相似，且可以使用一些通用策略解决。
 * 在它们的指数级解法中，要确保生成的结果 完整 且 无冗余，有三种常用的方法：
 *   递归
 *   回溯
 *   基于二进制位掩码和对应位掩码之间的映射字典生成排列/组合/子集
 */
function subsets(nums) {
  const n = nums.length;
  const tmpPath = [];
  const ans = [];
  const backtrack = (tmpPath, start) => {
    ans.push(tmpPath);
    for (let i = start; i < n; i++) {
      tmpPath.push(nums[i]);
      // tmpPath.slice()用来copy数组
      backtrack(tmpPath.slice(), i + 1);
      tmpPath.pop();
    }
  };
  backtrack(tmpPath, 0);
  return ans;
}
/**
 * 重复将新的元素加入到上一个结果集中的每个子集当中去，形成n个新的子集，再全部加入到结果集中去
 * @param {*} nums
 */
function subsets1(nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; i++) {
    let len = res.length;
    for (let j = 0; j < len; j++) {
      let sub = res[j].slice();
      sub.push(nums[i]);
      res.push(sub);
    }
  }
  return res;
}

/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-23 17:22:38
 * @LastEditTime: 2021-09-23 17:40:48
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/combinations/
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const ans = [];
  backtrack(n, 0, [], k, ans);
  return ans;
}
function backtrack(n, index, temp, len, ans) {
  if (temp.length === len) {
    return ans.push(temp);
  }
  // 计算剩余数字是否能凑齐组合, 剪枝
  for (let i = index; i < n - len + temp.length + 1; i++) {
    temp.push(i + 1);
    backtrack(n, i + 1, temp.slice(), len, ans);
    temp.pop();
  }
}

console.log(combine(4, 2));

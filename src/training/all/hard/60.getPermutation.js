/* eslint-disable no-param-reassign */
/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-17 11:26:01
 * @LastEditTime: 2021-09-17 12:17:55
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/permutation-sequence/
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 回溯 超时
function getPermutation1(n, k) {
  let count = 0;
  const list = new Array(n).fill(0).map(item => item + ++count);
  const permutations = [];
  backtrack1([], permutations, list, n);
  console.log(permutations);
  return permutations[k - 1].join("");
}
function backtrack1(temp, permutations, list, n) {
  if (temp.length === n) {
    permutations.push(temp);
    return;
  }
  for (let i = 0; i < list.length; i++) {
    if (temp.indexOf(list[i]) >= 0) continue;
    temp.push(list[i]);
    backtrack1(temp.slice(), permutations, list, n);
    temp.pop();
  }
}
// 回溯 缩小问题规模
function getPermutation(n, k) {
  let groupNum = 1;
  for (let i = 1; i <= n; i++) {
    groupNum *= i;
  } // 组合总数
  return backtrack([], groupNum, n, k);
}
function backtrack(temp, groupNum, n, k) {
  const progress = temp.length;
  if (progress === n) {
    return temp.join("");
  }
  groupNum /= n - progress; // 分组数量
  for (let i = 1; i <= n; i++) {
    if (temp.indexOf(i) >= 0) continue;
    // k大于一组的个数
    if (k > groupNum) {
      k -= groupNum; // 更新k，
      continue; // 跳过这一组，即跳过当前的数字i
    }
    temp.push(i);
    return backtrack(temp.slice(), groupNum, n, k);
  }
}
getPermutation(3, 3);

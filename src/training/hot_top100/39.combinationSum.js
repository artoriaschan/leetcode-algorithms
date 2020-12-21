/* eslint-disable no-unused-vars */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 思路:
 *  递归回溯
 *  递归回溯 + 剪枝
 */
function combinationSum(candidates, target) {
  const ans = [];
  const tmp = [];
  const backtrack = (tmp, target, start) => {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      ans.push(tmp);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      let res = target - candidates[i];
      tmp.push(candidates[i]);
      backtrack(tmp.slice(), res, i);
      tmp.pop();
    }
  };
  backtrack(tmp, target, 0);
  return ans;
}
// 递归回溯 +剪枝 : 排序数组, 对于target < candidates[i]时, 没必要进行迭代递归
function combinationSum1(candidates, target) {
  const ans = [];
  const tmp = [];
  candidates.sort((a, b) => a - b);
  const backtrack = (tmp, target, start) => {
    if (target === 0) {
      ans.push(tmp);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (target < candidates[i]) break;
      let res = target - candidates[i];
      tmp.push(candidates[i]);
      backtrack(tmp.slice(), res, i);
      tmp.pop();
    }
  };
  backtrack(tmp, target, 0);
  return ans;
}

/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-29 11:45:12
 * @LastEditTime: 2021-09-29 11:57:21
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
 */
import TreeNode from "./TreeNode";
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function generateTrees(n) {
  // n 为 0 是返回[]
  if (n === 0) return [];
  // 指定最大范围
  return genTrees(1, n);
}

function genTrees(start, end) {
  let ans = [];
  // 指针交错递归终止
  if (start > end) return [null];
  // i指针滑动，枚举left和right分段的所有可能
  for (let i = start; i <= end; i++) {
    // 左侧和右侧生成树的集合 返回为数组
    let left = genTrees(start, i - 1);
    let right = genTrees(i + 1, end);
    // 循环左右两侧的树集合 分别拼接到新树上，并且存储到结果数组中
    for (const leftNode of left) {
      for (const rightNode of right) {
        let node = new TreeNode(i);
        node.left = leftNode;
        node.right = rightNode;
        ans.push(node);
      }
    }
  }
  // 返回指定范围生成的树集合
  return ans;
}

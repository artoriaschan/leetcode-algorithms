/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-23 17:08:34
 * @LastEditTime: 2021-10-23 17:24:23
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 */
import TreeNode from "../TreeNode";
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
}

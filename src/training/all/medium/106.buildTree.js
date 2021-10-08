/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-08 14:48:54
 * @LastEditTime: 2021-10-08 14:50:05
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */
import TreeNode from "../TreeNode";
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;
  let root = new TreeNode(postorder.pop());
  let p = inorder.indexOf(root.val);
  root.right = buildTree(inorder.slice(p + 1), postorder.slice(p));
  root.left = buildTree(inorder.slice(0, p), postorder.slice(0, p));
  return root;
}

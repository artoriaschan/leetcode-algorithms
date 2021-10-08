/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-08 14:36:16
 * @LastEditTime: 2021-10-08 14:47:50
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */
import TreeNode from "../TreeNode";

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]);

  const index = inorder.indexOf(preorder.shift());

  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));

  return root;
}

/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-09 11:43:21
 * @LastEditTime: 2021-10-23 16:26:48
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/balanced-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// function isBalanced(root) {
//   if (!root) return true;
//   return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
// }

// function height(root) {
//   if (root === null) {
//     return 0;
//   }
//   return Math.max(height(root.left), height(root.right)) + 1;
// }

function isBalanced(root) {
  return height(root) >= 0;
}

function height(root) {
  if (root == null) {
    return 0;
  }
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);
  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }
  return Math.max(leftHeight, rightHeight) + 1;
}

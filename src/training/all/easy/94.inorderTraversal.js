/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-29 11:32:19
 * @LastEditTime: 2021-09-29 11:44:28
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  const ans = [];
  inorder(root, ans);
  return ans;
}

function inorder(root, ans) {
  if (!root) return;
  if (root.left) inorder(root.left, ans);
  ans.push(root.val);
  if (root.right) inorder(root.right, ans);
}

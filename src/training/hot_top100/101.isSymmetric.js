/* eslint-disable no-unused-vars */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 思路:
 *  判断左右子树是否镜像对称, 即可进行递归和迭代.
 */
function isSymmetric(root) {
  return isMirror(root, root);
}
function isMirror(t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;
  return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}

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
 * @param {number} sum
 * @return {number}
 * 思路:
 *  递归
 */
function pathSum(root, sum) {
  function findPath(node, sum) {
    if (node == null) return 0;
    let res = 0;
    if (sum - node.val === 0) res++;
    res += findPath(node.left, sum - node.val);
    res += findPath(node.right, sum - node.val);
    return res;
  }
  if (root == null) return 0;
  let res = 0;
  res += findPath(root, sum);
  res += pathSum(root.left, sum);
  res += pathSum(root.right, sum);
  return res;
}

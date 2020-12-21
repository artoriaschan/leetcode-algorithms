/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 思路:
 *  自顶向下深度优先遍历
 */
// eslint-disable-next-line no-unused-vars
function longestConsecutive(root) {
  return dfs(root, null, 0);
}
function dfs(node, parent, length) {
  if (node === null) return length;
  length = parent !== null && node.val === parent.val + 1 ? length + 1 : 1;
  return Math.max(length, dfs(node.left, node, length), dfs(node.right, node, length));
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
function findLeaves(root) {
  if (!root) return [];
  let i = 0;
  let ans = [];
  function helper(node) {
    if (!node) return null;
    if (!node.left && !node.right) {
      ans[i].push(node.val);
      return null;
    }
    node.left = helper(node.left);
    node.right = helper(node.right);
    return node;
  }
  while (root) {
    ans[i] = [];
    root = helper(root);
    i++;
  }
  return ans;
}

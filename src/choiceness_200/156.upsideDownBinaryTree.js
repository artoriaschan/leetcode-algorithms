/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// eslint-disable-next-line no-unused-vars
function upsideDownBinaryTree(root) {
  if (!root) return root;
  if (!root.left) return root;
  let newRoot;
  function reversal(node) {
    if (!node.left.left) {
      newRoot = new TreeNode(node.left.val);
      if (node.right) {
        newRoot.left = new TreeNode(node.right.val);
      }
      newRoot.right = new TreeNode(node.val);
      return newRoot.right;
    }
    let after = reversal(node.left);
    if (node.right) {
      after.left = new TreeNode(node.right.val);
    }
    after.right = new TreeNode(node.val);
    return after.right;
  }
  reversal(root);
  return newRoot;
}

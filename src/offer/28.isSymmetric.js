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
 */
function isSymmetric(root) {
  return isMirror(root, root);
}

function isMirror(left, right) {
  if (left == null && right == null) return true;
  if (left == null || right == null) return false;
  return left.val === right.val && isMirror(left.right, right.left) && isMirror(left.left, right.right);
}

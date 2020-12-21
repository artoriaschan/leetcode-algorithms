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
 */
// 树的深度遍历 => 递归的思想
// 递推式是 树的深度 = 左子树的深度 + 右子树的深度 + 1
function maxDepth(root) {
  if (root == null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

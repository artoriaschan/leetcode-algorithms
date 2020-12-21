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
 *  遍历: 二叉搜索树的中序遍历为递增的
 */
// eslint-disable-next-line no-unused-vars
function isValidBST(root) {
  let stack = [];
  let inorder = -Infinity;

  while (stack.length || root !== null) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // If next element in inorder traversal
    // is smaller than the previous one
    // that's not BST.
    if (root.val <= inorder) return false;
    inorder = root.val;
    root = root.right;
  }
  return true;
}

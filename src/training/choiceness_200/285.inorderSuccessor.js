/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 * 思路:
 *  中序遍历
 */
// eslint-disable-next-line no-unused-vars
function inorderSuccessor(root, p) {
  if (p.right !== null) {
    p = p.right;
    while (p.left !== null) p = p.left;
    return p;
  }
  let stack = [];
  let inorder = Number.MIN_VALUE;

  // 中序遍历 : left -> node -> right
  while (stack.length !== 0 || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (inorder === p.val) return root;
    inorder = root.val;
    root = root.right;
  }
  return null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 思路:
 *  二叉树操作: 左子树变成右子树, 右子树入栈
 */
// eslint-disable-next-line no-unused-vars
function flatten(root) {
  const stack = [];
  let first = root;
  while (first || stack.length) {
    if (!first.left && !first.right) {
      let node = stack.pop();
      first.left = null;
      first.right = node;
      first = first.right;
    } else if (first.left) {
      if (first.right) stack.push(first.right);
      if (first.left) {
        first.right = first.left;
        first.left = null;
        first = first.right;
      }
    } else {
      first = first.right;
    }
  }
}

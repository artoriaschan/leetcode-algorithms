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
 * @return {TreeNode}
 *
 * 思路:
 *  回溯法: 一个反序中序遍历的方法是通过递归实现。
 *  通过调用栈回到之前的节点，我们可以轻松地反序遍历所有节点，遍历的过程中累加起来即可
 */
function convertBST(root) {
  function convert(node) {
    if (node === null) return 0;
    convert(node.right);
    sum += node.val;
    node.val = sum;
    convert(node.left);
  }

  let sum = 0;
  convert(root);
  return root;
}

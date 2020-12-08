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
 * 思路:
 *  递归交换左右子树
 */
function invertTree(root) {
  if (!root) return null;
  // eslint-disable-next-line no-param-reassign
  root = exchangeSubTree(root);
  return root;
}
function exchangeSubTree(root) {
  if (!root) return null;
  return {
    val: root.val,
    left: exchangeSubTree(root.right),
    right: exchangeSubTree(root.left),
  };

  // if (root.left && root.right) {
  //   let tmp = root.right;
  //   root.right = root.left;
  //   root.left = tmp;
  //   exchangeSubTree(root.left);
  //   exchangeSubTree(root.right);
  // } else if (!root.left && root.right) {
  //   root.left = root.right;
  //   root.right = null;
  //   exchangeSubTree(root.left);
  // } else if (!root.right && root.left) {
  //   root.right = root.left;
  //   root.left = null;
  //   exchangeSubTree(root.right);
  // }
  // return root;
}

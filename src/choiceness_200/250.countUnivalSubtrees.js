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
 *  深度优先遍历
 */
// eslint-disable-next-line no-unused-vars
function countUnivalSubtrees(root) {
  function isUni(node) {
    if (node.left === null && node.right === null) {
      // found a univalue subtree - increment
      count++;
      return true;
    }
    let isUnival = true;

    // check if all of the node's children are univalue subtrees and if they have the same value
    // also recursively call is_uni for children
    if (node.left !== null) {
      isUnival = isUni(node.left) && isUnival && node.left.val === node.val;
    }
    if (node.right !== null) {
      isUnival = isUni(node.right) && isUnival && node.right.val === node.val;
    }
    // return if a univalue tree exists here and increment if it does
    if (!isUnival) return false;
    count++;
    return true;
  }
  let count = 0;
  if (root === null) return 0;
  isUni(root);
  return count;
}

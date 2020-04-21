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
 *  递归
 */
// eslint-disable-next-line no-unused-vars
function maxPathSum(root) {
  let maxSum = -Infinity;
  function maxGain(node) {
    if (node == null) return 0;

    // max sum on the left and right sub-trees of node
    let leftGain = Math.max(maxGain(node.left), 0);
    let rightGain = Math.max(maxGain(node.right), 0);

    // the price to start a new path where `node` is a highest node
    let priceNewpath = node.val + leftGain + rightGain;

    // update max_sum if it's better to start a new path
    maxSum = Math.max(maxSum, priceNewpath);
    // for recursion :
    // return the max gain if continue the same path
    return node.val + Math.max(leftGain, rightGain);
  }
  maxGain(root);
  return maxSum;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
  let maxSum = -Infinity;
  // 返回节点的最大贡献值
  function maxGain(node) {
    if (node === null) return 0;
    // 递归计算左右子节点的最大贡献值
    // 只有在最大贡献值大于 0 时，才会选取对应子节点
    const leftGain = Math.max(maxGain(node.left), 0);
    const rightGain = Math.max(maxGain(node.right), 0);
    // 节点的最大路径和 = 该节点的值 + 该节点的左右子节点的最大贡献值
    const priceNewpath = node.val + leftGain + rightGain;
    // 更新答案
    maxSum = Math.max(maxSum, priceNewpath);
    return node.val + Math.max(leftGain, rightGain);
  }
  maxGain(root);
  return maxSum;
}

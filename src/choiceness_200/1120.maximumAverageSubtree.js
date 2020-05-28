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
// eslint-disable-next-line no-unused-vars
function maximumAverageSubtree(root) {
  function helper(node) {
    let returns = [0, 0];
    if (!node) return returns;
    let left = helper(node.left);
    let right = helper(node.right);
    // 设置当前树的元素和
    returns[0] = left[0] + right[0] + node.val;
    // 设置节点个数
    returns[1] = left[1] + right[1] + 1;
    // 更新平均值
    ans = Math.max(ans, returns[0] / returns[1]);
    return returns;
  }
  let ans = 0;
  helper(root);
  return ans;
}

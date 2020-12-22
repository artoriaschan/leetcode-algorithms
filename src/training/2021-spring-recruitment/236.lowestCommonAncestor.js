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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归
function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  // 在左子树上获取公共祖先节点
  const left = lowestCommonAncestor(root.left, p, q);
  // 在右子树上获取公共祖先节点
  const right = lowestCommonAncestor(root.right, p, q);
  // 若都获取不到则返回null
  if (left == null && right == null) {
    return null;
  }
  // 在右子树上获取公共祖先节点，返回right
  if (left == null && right != null) {
    return right;
  }
  // 在左子树上获取公共祖先节点，返回left
  if (left != null && right == null) {
    return left;
  }
  return root;
}

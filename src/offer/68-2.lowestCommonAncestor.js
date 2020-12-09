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
// DFS
function lowestCommonAncestor(root, p, q) {
  // 当访问到叶子节点或者相同节点时返回
  if (root === null || root === p || root === q) {
    return root;
  }
  // 在 root 节点的左右子树上搜索公共祖先
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left == null && right == null) {
    return null;
  }
  if (left == null && right != null) {
    return right;
  }
  if (left != null && right == null) {
    return left;
  }
  return root;
}

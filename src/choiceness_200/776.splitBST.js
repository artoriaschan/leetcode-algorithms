/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} V
 * @return {TreeNode[]}
 */
// eslint-disable-next-line no-unused-vars
function splitBST(root, V) {
  if (root === null) return [null, null];
  if (root.val <= V) {
    let bns = splitBST(root.right, V);
    root.right = bns[0];
    bns[0] = root;
    return bns;
  }
  let bns = splitBST(root.left, V);
  root.left = bns[1];
  bns[1] = root;
  return bns;
}

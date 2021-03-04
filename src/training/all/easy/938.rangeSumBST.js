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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high) {
  let res = 0;
  if (!root) return res;
  if (root.val < low) {
    res += rangeSumBST(root.right, low, high);
  } else if (root.val > high) {
    res += rangeSumBST(root.left, low, high);
  } else {
    res += root.val;
    res += rangeSumBST(root.left, low, high);
    res += rangeSumBST(root.right, low, high);
  }
  return res;
}

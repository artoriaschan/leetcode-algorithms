/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function closestValue(root, target) {
  const isClosest = root => {
    if (!root) {
      return;
    }
    let diff = Math.abs(root.val - target);
    if (diff < curr) {
      curr = diff;
      res = root.val;
    }
    if (root.val < target) {
      isClosest(root.right);
    } else {
      isClosest(root.left);
    }
  };
  let res = root.val;
  let curr = Number.MAX_SAFE_INTEGER;
  isClosest(root);
  return res;
}

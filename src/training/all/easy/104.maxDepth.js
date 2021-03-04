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
function maxDepth(root) {
  let depth = 0;
  if (!root) return depth;
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let len = queue.length;
    while (len > 0) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    depth++;
  }
  return depth;
}

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
 * @return {number[]}
 */
function getLonelyNodes(root) {
  const res = [];
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const node = queue.shift();
    const noleft = node.left === null;
    const noright = node.right === null;
    if (noleft && !noright) {
      res.push(node.right.val);
      queue.push(node.right);
    } else if (noright && !noleft) {
      res.push(node.left.val);
      queue.push(node.left);
    } else if (noleft && noright) {
      // do nothing
    } else {
      queue.push(node.left, node.right);
    }
  }
  return res;
}

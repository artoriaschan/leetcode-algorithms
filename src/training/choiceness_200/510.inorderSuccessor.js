/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * 思路:
 *  node节点有右孩子: 则它的后继在树中相对较低的位置，为了找到后继，我们应该向右走一次，再尽可能的向左走。
 *  node节点没有有右孩子: 则它的后继在树中相对较高的位置，为了找到后继，我们向上走到直到结点 tmp 的左孩子是 node 的父节点时，则 node 的后继为 tmp。
 */
// eslint-disable-next-line no-unused-vars
function inorderSuccessor(node) {
  if (node.right) {
    node = node.right;
    while (node.left != null) node = node.left;
    return node;
  }
  while (node.parent != null && node === node.parent.right) node = node.parent;
  return node.parent;
}

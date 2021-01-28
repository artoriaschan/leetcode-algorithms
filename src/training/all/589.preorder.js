/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
  const res = [];
  if (!root) return res;
  if (!root.children) {
    res.push(root.val);
    return res;
  }
  res.push(root.val);
  for (let c of root.children) {
    res.push(...preorder(c));
  }
  return res;
}

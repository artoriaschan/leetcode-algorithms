/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
function postorder(root) {
  const res = [];
  if (!root) return res;
  if (!root.children) {
    res.push(root.val);
    return res;
  }
  for (let c of root.children) {
    res.push(...postorder(c));
  }
  res.push(root.val);
  return res;
}

/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// eslint-disable-next-line no-unused-vars
function treeToDoublyList(root) {
  function dfs(node) {
    if (node) {
      dfs(node.left);
      node.left = prev;
      prev.right = node;
      prev = node;

      dfs(node.right);
    }
  }
  if (!root) return null;
  let dummyRoot = {};
  let prev = dummyRoot; // global variable
  dfs(root);

  dummyRoot.right.left = prev; // circle
  prev.right = dummyRoot.right;

  return dummyRoot.right;
}

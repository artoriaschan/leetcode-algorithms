/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
// eslint-disable-next-line no-unused-vars
function recoverFromPreorder(S) {
  const path = [];
  let pos = 0;
  while (pos < S.length) {
    let level = 0;
    while (S[pos] === "-") {
      ++level;
      ++pos;
    }
    let value = 0;
    while (pos < S.length && S[pos] >= 0 && S[pos] <= 9) {
      value = value * 10 + parseInt(S[pos], 10);
      ++pos;
    }
    let node = new TreeNode(value);
    if (level === path.length) {
      if (path.length) {
        path[path.length - 1].left = node;
      }
    } else {
      while (level !== path.length) {
        path.pop();
      }
      path[path.length - 1].right = node;
    }
    path.push(node);
  }
  while (path.length < 1) {
    path.pop();
  }
  return path[0];
}

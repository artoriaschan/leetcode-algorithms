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
 * @return {TreeNode[]}
 */
function findDuplicateSubtrees(root) {
  const seen = new Map();
  const repeat = new Set();
  const dfs = node => {
    if (!node) {
      return "";
    }
    let sb = "";
    sb += node.val;
    sb += "(";
    sb += dfs(node.left);
    sb += ")(";
    sb += dfs(node.right);
    sb += ")";
    if (seen.has(sb)) {
      repeat.add(seen.get(sb));
    } else {
      seen.set(sb, node);
    }
    return sb;
  };
  dfs(root);
  return Array.from(repeat);
}

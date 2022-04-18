// https://leetcode-cn.com/problems/count-complete-tree-nodes/
function countNodes(root) {
  if (!root) {
    return 0;
  }
  const left = countNodes(root.left);
  const right = countNodes(root.right);

  return left + right + 1;
}

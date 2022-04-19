// https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree/
function isCompleteTree(root) {
  let size = 0;
  let maxCode = 0;
  const dfs = (root, index) => {
    if (!root) return;
    size++;
    maxCode = Math.max(maxCode, index);
    dfs(root.left, index * 2);
    dfs(root.right, index * 2 + 1);
  };
  dfs(root, 1);
  // 树的size 是否等于最后一个节点的indexCode
  return size === maxCode;
}

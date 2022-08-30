function isSubStructure(A, B) {
  // 以节点A为根节点的子树包含树B
  // 树B是树A左子树的子结构
  // 树B是树A右子树的子结构
  return A != null && B != null && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
}
function recur(A, B) {
  // base case:
  // B为空则返回true
  // A为空返回false
  // A.val !== B.val则返回为false
  if (B == null) return true;
  if (A == null || A.val !== B.val) return false;
  // 对比 A.left与B.left
  // 对比 A.right与B.right
  return recur(A.left, B.left) && recur(A.right, B.right);
}

// https://leetcode-cn.com/problems/subtree-of-another-tree/

function isSubtree(root, subRoot) {
  return dfs(root, subRoot);
}

function dfs(s, t) {
  if (s == null) {
    return false;
  }
  return check(s, t) || dfs(s.left, t) || dfs(s.right, t);
}

function check(s, t) {
  if (!s && !t) return true;
  if (!s || !t || s.val !== t.val) return false;
  return check(s.left, t.left) && check(s.right, t.right);
}

function isSubtree1(root, subRoot) {
  if (!root && !subRoot) return true;
  if (!root && subRoot) return false;
  return isSameTree(root, subRoot) || isSubtree1(root.left, subRoot) || isSubtree1(root.right, subRoot);
}

function isSameTree(s, t) {
  if (!s && !t) return true;
  return s && t && s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

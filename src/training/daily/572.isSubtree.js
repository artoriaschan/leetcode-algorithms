/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * 思路:
 *  DFS 暴力匹配
 *  DFS 序列(先序序列)上做串匹配
 */
// eslint-disable-next-line no-unused-vars
function isSubtree(s, t) {
  function check(o, t) {
    if (!o && !t) return true;
    if ((o && !t) || (!o && t) || o.val !== t.val) return false;
    return check(o.left, t.left) && check(o.right, t.right);
  }
  function dfs(o, t) {
    if (!o) return false;
    return check(o, t) || dfs(o.left, t) || dfs(o.right, t);
  }
  return dfs(s, t);
}
// eslint-disable-next-line no-unused-vars
function isSubtree1(s, t) {
  function check(o, t) {
    if (!o && !t) return true;
    if ((o && !t) || (!o && t) || o.val !== t.val) return false;
    return check(o.left, t.left) && check(o.right, t.right);
  }
  function dfs(o, t) {
    if (!o) return false;
    return check(o, t) || dfs(o.left, t) || dfs(o.right, t);
  }
  return dfs(s, t);
}

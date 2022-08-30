// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/

function treeToDoublyList(root) {
  if (!root) return;
  let head;
  let pre;
  function dfs(cur) {
    if (!cur) return;
    dfs(cur.left);
    if (pre != null) pre.right = cur;
    else head = cur;
    cur.left = pre;
    pre = cur;
    dfs(cur.right);
  }
  dfs(root);
  head.left = pre;
  pre.right = head;
  return head;
}

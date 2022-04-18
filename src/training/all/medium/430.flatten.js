// https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/

function flatten(head) {
  dfs(head);
  return head;
}

function dfs(node) {
  let cur = node;
  // 记录链表的最后一个节点
  let last = null;

  while (cur) {
    let next = cur.next;
    // 如果有子节点，那么首先处理子节点
    if (cur.child) {
      const childLast = dfs(cur.child);
      next = cur.next;
      //  将 node 与 child 相连
      cur.next = cur.child;
      cur.child.prev = cur;
      //  如果 next 不为空，就将 last 与 next 相连
      if (next != null) {
        childLast.next = next;
        next.prev = childLast;
      }
      // 将 child 置为空
      cur.child = null;
      last = childLast;
    } else {
      last = cur;
    }
    cur = next;
  }
  return last;
}

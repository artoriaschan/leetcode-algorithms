/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-24 19:18:10
 * @LastEditTime: 2021-09-24 19:45:09
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 */
import ListNode from "../ListNode";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head) {
    return head;
  }
  // 哨兵节点
  const dummy = new ListNode(0, head);

  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const x = cur.next.val;
      while (cur.next && cur.next.val === x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
}

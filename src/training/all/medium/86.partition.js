/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-25 16:55:20
 * @LastEditTime: 2021-09-25 17:10:19
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/partition-list/
 */
import ListNode from "../ListNode";
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  if (!head) return head;
  let small = new ListNode();
  let large = new ListNode();
  const smallHead = small;
  const largeHead = large;
  let first = head;
  while (first) {
    if (first.val < x) {
      small.next = new ListNode(first.val);
      small = small.next;
    } else {
      large.next = new ListNode(first.val);
      large = large.next;
    }
    first = first.next;
  }
  small.next = largeHead.next;
  return smallHead.next;
}

/* eslint-disable no-unused-vars */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 思路
 * 	链表节点操作
 */
function reverseList(head) {
  let prev = null;
  let curr = head;
  let first = head;
  while (curr) {
    first = first.next;
    curr.next = prev;
    prev = curr;
    curr = first;
  }
  return prev;
}

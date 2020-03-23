/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 思路:
 *  链表操作, 迭代
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (!l1 && !l2) return null;

  let head = new ListNode(null);
  let first = head;
  while (l1 || l2) {
    if (!l1) {
      head.val = l2.val;
      head.next = l2.next;
      break;
    }
    if (!l2) {
      head.val = l1.val;
      head.next = l1.next;
      break;
    }
    if (l1.val < l2.val) {
      head.val = l1.val;
      l1 = l1.next;
    } else {
      head.val = l2.val;
      l2 = l2.next;
    }
    head.next = new ListNode(null);
    head = head.next;
  }
  return first;
}

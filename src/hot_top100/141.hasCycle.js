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
 * @return {boolean}
 *  思路:
 *    双指针: 一个指针步数为2, 一个为1, 看两个指针是否相遇, 相遇则说明有环存在
 */
function hasCycle(head) {
  let fast = head;
  let slow = head;
  while (fast) {
    fast = fast.next;
    slow = slow.next;
    if (fast) fast = fast.next;
    else break;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

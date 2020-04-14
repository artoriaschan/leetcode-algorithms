/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 思路:
 *  双指针
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// eslint-disable-next-line no-unused-vars
function removeNthFromEnd(head, n) {
  if (!head) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}

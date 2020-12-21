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

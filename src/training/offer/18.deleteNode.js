/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function deleteNode(head, val) {
  let first = head;
  let prev = null;
  while (first !== null) {
    if (first.val !== val) {
      prev = first;
      first = first.next;
    } else {
      if (prev !== null) {
        prev.next = first.next;
      } else {
        head = first.next;
      }
      break;
    }
  }
  return head;
}

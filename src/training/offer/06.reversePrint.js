/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
function reversePrint(head) {
  let res = [];
  while (head !== null) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
}

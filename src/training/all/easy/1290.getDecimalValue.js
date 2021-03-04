/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
function getDecimalValue(head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return parseInt(res.join(""), 10);
}

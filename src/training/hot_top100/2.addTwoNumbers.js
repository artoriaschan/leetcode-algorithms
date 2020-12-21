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
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// eslint-disable-next-line no-unused-vars
function addTwoNumbers(l1, l2) {
  let result = new ListNode(0);
  let first = result;
  let carry = 0; // 进位
  while (l1 || l2) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = x + y + carry;
    carry = parseInt(sum / 10, 10);
    first.next = new ListNode(sum % 10);
    first = first.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  if (carry === 1) {
    first.next = new ListNode(carry);
  }
  return result.next;
}

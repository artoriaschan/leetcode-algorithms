/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 双指针
var getKthFromEnd = function(head, k) {
  let slow = head;
  while (head !== null) {
    if (k > 0) {
      head = head.next;
      k--;
    } else {
      slow = slow.next;
      head = head.next;
    }
  }
  return slow;
};

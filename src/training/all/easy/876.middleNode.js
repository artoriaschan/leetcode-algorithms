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
function middleNode(head) {
  let slow = head;
  let fast = head;
  let steps = 0;
  while (fast) {
    fast = fast.next;
    steps++;
    if (steps === 2) {
      steps = 0;
      slow = slow.next;
    }
  }
  return slow;
}

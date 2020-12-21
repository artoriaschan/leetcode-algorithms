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
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  let len = 0;
  let copyHead = head;
  let middleNode = null;
  while (head) {
    len++;
    head = head.next;
  }
  let middle = Math.floor(len / 2);
  while (copyHead) {
    if (middle === 0) {
      middleNode = copyHead;
      break;
    }
    copyHead = copyHead.next;
    middle--;
  }
  return middleNode;
}

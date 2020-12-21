/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 思路:
 *  两两合并
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// eslint-disable-next-line no-unused-vars
function mergeKLists(lists) {
  function mergeTwoList(l1, l2) {
    let preHead = new ListNode(-1);
    let preNode = preHead;
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        preNode.next = l1;
        l1 = l1.next;
      } else {
        preNode.next = l2;
        l2 = l2.next;
      }
      preNode = preNode.next;
    }
    preNode.next = l1 || l2;
    return preHead.next;
  }
  function merge(left, right) {
    if (left === right) return lists[left];
    let mid = (left + right) >> 1;
    let l1 = merge(left, mid);
    let l2 = merge(mid + 1, right);
    return mergeTwoList(l1, l2);
  }
  let length = lists.length;
  if (length <= 0) return null;
  return merge(0, length - 1);
}

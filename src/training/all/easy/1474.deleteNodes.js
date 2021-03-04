/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
function deleteNodes(head, m, n) {
  let res = head;
  while (res) {
    let prev = null;
    for (let i = 0; i < m; i++) {
      if (res) {
        prev = res;
        res = res.next;
      } else break;
    }
    for (let i = 0; i < n; i++) {
      if (res) {
        prev.next = res.next;
        res = res.next;
      } else break;
    }
  }
  return head;
}

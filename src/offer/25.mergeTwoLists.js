/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next);
  return l2;
}

function mergeTwoLists1(l1, l2) {
  let head = new ListNode(null);
  let res = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      const node = new ListNode(l2.val);
      head.next = node;
      head = head.next;
      l2 = l2.next;
    } else {
      const node = new ListNode(l1.val);
      head.next = node;
      head = head.next;
      l1 = l1.next;
    }
  }
  while (l1 !== null) {
    const node = new ListNode(l1.val);
    head.next = node;
    head = head.next;
    l1 = l1.next;
  }
  while (l2 !== null) {
    const node = new ListNode(l2.val);
    head.next = node;
    head = head.next;
    l2 = l2.next;
  }
  return res.next;
}

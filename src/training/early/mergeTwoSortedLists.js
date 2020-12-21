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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;
  let list = null;
  let head = null;
  let hasHead = false;
  while (l1 && l2) {
    console.log(l1.val);
    console.log(l2.val);
    if (l1.val <= l2.val) {
      if (!hasHead) {
        list = new ListNode(l1.val);
        head = list;
        l1 = l1.next;
        hasHead = true;
        continue;
      }
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      if (!hasHead) {
        list = new ListNode(l2.val);
        head = list;
        l2 = l2.next;
        hasHead = true;
        continue;
      }
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    list = list.next;
  }
  if (l1) {
    if (!hasHead) {
      list = l1;
      head = list;
      hasHead = true;
      return head;
    }
    list.next = l1;
  }
  if (l2) {
    if (!hasHead) {
      list = l2;
      head = list;
      hasHead = true;
      return head;
    }
    list.next = l2;
  }
  return head;
};

let l1 = new ListNode(2);
// l1.next = new ListNode(2)
// l1.next.next = new ListNode(4)

// let l2 = new ListNode(1)
// l2.next = new ListNode(3)
// l2.next.next = new ListNode(4)
let l2 = new ListNode(1);

let list = mergeTwoLists(l1, l2);
console.info(JSON.stringify(list));

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

function debug(obj) {
  console.log(JSON.stringify(obj));
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 * 递归处理
 */
var swapPairs = function(head) {
  if (!head) return null;
  if (!head.next) return head;
  let temp = head.next;
  head.next = swapPairs(temp.next);
  temp.next = head;
  debug(temp);
  return temp;
};

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);

swapPairs(list);

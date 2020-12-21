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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let currentNode = head;
  if (currentNode == null || k < 0) {
    return head;
  }
  let count = 0;
  while (currentNode != null && count < k) {
    // find the k+1 node
    currentNode = currentNode.next;
    count++;
  }
  if (count == k) {
    // if k+1 node is found
    currentNode = reverseKGroup(currentNode, k); // reverse list with k+1 node as head
    while (count-- > 0) {
      // reverse current k-group:
      let temp = head.next;
      head.next = currentNode;
      currentNode = head;
      head = temp;
    }
    head = currentNode;
  }
  return head;
};

let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

debug(reverseKGroup(list, 3));

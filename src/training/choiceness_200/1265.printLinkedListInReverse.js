/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    };
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 * 思路:
 *  递归
 */
// eslint-disable-next-line no-unused-vars
function printLinkedListInReverse(head) {
  let res = [];
  var print = head => {
    res.push(head);
    if (head.getNext()) {
      return print(head.getNext());
    }
  };
  print(head);
  res = res.reverse();
  res.forEach(value => {
    value.printValue();
  });
}

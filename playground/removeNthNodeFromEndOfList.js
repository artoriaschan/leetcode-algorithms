/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var removeNthFromEnd = function(head, n) {

    // let length = 0
    // let copy = head
    // while(head) {
    //     length ++ 
    //     head = head.next
    // }
    // let removeIndex = length - n
    // let prevNode = {}
    // let item = copy
    // while(removeIndex >= 0){
    //     if(removeIndex === 0){
    //         prevNode.next = item.next
    //         return copy
    //     }
    //     prevNode = item
    //     item = item.next
    //     removeIndex --
    // }

    let list = []
    while(head) {
        list.push(head.val)
        head = head.next
    }
    let removeIndex = list.length - n
    list.splice(removeIndex, 1)
    return list
};
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)

console.log(JSON.stringify(removeNthFromEnd(head, 2)))
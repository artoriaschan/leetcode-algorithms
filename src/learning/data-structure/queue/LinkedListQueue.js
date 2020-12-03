class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(item) {
    const node = new LinkedListNode(item);
    if (this.head === null) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head === null) return null;
    const item = this.head.data;
    this.head = this.head.next;
    return item;
  }
}

// test
const queue = new LinkedListQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

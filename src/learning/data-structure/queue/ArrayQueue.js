class ArrayQueue {
  constructor() {
    this.content = [];
  }

  enqueue(item) {
    this.content.push(item);
  }

  dequeue() {
    const item = this.content.shift();
    return item;
  }
}

// test
const queue = new ArrayQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

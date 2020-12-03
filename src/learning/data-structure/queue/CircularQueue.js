class CircularQueue {
  constructor(size = 3) {
    this.size = size;
    this.head = -1;
    this.tail = -1;
    this.content = [];
  }

  isEmpty() {
    return this.tail === -1 && this.head === -1;
  }

  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }

  enqueue(item) {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (this.tail + 1) % this.size;
    this.content[this.tail] = item;
    return true;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const item = this.content[this.head];
      if (this.tail === this.head) {
        this.tail = -1;
        this.head = -1;
      } else {
        this.head = (this.head + 1) % this.size;
      }
      return item;
    }
    return null;
  }
}

const queue = new CircularQueue(9);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
console.log(queue.content);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

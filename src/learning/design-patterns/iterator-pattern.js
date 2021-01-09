class Iterator {
  constructor(arr) {
    this.content = arr;
    this.current = 0;
    this.size = arr.length;
  }

  next() {
    this.current++;
  }

  done() {
    return this.current >= this.size;
  }

  getCurrItem() {
    return this.content[this.current];
  }
}

const iterator = new Iterator([1, 2, 3]);
while (!iterator.done()) {
  console.log(iterator.getCurrItem());
  iterator.next();
}

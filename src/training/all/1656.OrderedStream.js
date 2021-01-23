/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */
class OrderedStream {
  /**
   * @param {number} n
   */
  constructor(n) {
    this.content = new Array(n + 1).fill(null);
    this.index = 1;
  }

  /**
   * @param {number} id
   * @param {string} value
   * @return {string[]}
   */
  insert(id, value) {
    const res = [];
    this.content[id] = value;
    while (this.content[this.index]) {
      res.push(this.content[this.index]);
      this.index++;
    }
    return res;
  }
}

const os = new OrderedStream(5);
console.log(os.insert(3, "ccccc"));
console.log(os.insert(1, "aaaaa"));
console.log(os.insert(2, "bbbbb"));
console.log(os.insert(5, "eeeee"));
console.log(os.insert(4, "ddddd"));

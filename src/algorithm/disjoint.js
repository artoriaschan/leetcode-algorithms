// eslint-disable-next-line no-unused-vars
class Disjoint {
  constructor() {
    this.father = new Map();
  }

  find(x) {
    if (this.father.get(x) === x) return x;
    const res = this.find(this.father.get(x));
    this.father.set(x, res);
    return res;
  }

  union(x, y) {
    if (!this.father.has(x)) this.father.set(x, x);
    if (!this.father.has(y)) this.father.set(y, y);

    const parentX = this.find(x);
    const parentY = this.find(y);
    if (parentX !== parentY) {
      this.father.set(parentX, parentY);
    }
  }
}

/**
 * @param {string} A
 * @param {string} B
 * @param {string} S
 * @return {string}
 * 思路:
 *  并查集
 */
// eslint-disable-next-line no-unused-vars
function smallestEquivalentString(A, B, S) {
  let disjoint = new Disjoint();
  for (let i = 0; i < A.length; ++i) {
    disjoint.union(A[i], B[i]);
  }
  let res = "";
  for (let i = 0; i < S.length; ++i) {
    let word = disjoint.find(S[i]);
    res += word || S[i];
  }
  return res;
}
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
    // 小的当爹
    if (parentX < parentY) {
      this.father.set(parentY, parentX);
    } else if (parentX > parentY) {
      this.father.set(parentX, parentY);
    }
  }
}

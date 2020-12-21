/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
// eslint-disable-next-line no-unused-vars
class ZigzagIterator {
  /**
   * @constructor
   * @param {Integer[]} v1
   * @param {Integer[]} v1
   */
  constructor(v1, v2) {
    this.cache = [];
    let len1 = v1.length;
    let len2 = v2.length;
    let len = len1 > len2 ? len2 : len1;
    let i = 0;
    for (; i < len; i++) {
      this.cache.push(v1[i]);
      this.cache.push(v2[i]);
    }
    if (len === len1) {
      this.cache = this.cache.concat(v2.splice(i));
    } else {
      this.cache = this.cache.concat(v1.splice(i));
    }
  }

  /**
   * @this ZigzagIterator
   * @returns {boolean}
   */
  hasNext() {
    return this.cache.length > 0;
  }

  /**
   * @this ZigzagIterator
   * @returns {integer}
   */
  next() {
    return this.cache.splice(0, 1);
  }
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// eslint-disable-next-line no-unused-vars
class Vector2D {
  /**
   * @param {number[][]} v
   */
  constructor(v) {
    this.plainArr = [];
    for (let i = 0; i < v.length; ++i) {
      for (let j = 0; j < v[i].length; ++j) {
        this.plainArr.push(v[i][j]);
      }
    }
  }

  /**
   * @return {number}
   */
  next() {
    if (this.hasNext()) return this.plainArr.shift();
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.plainArr.length > 0;
  }
}

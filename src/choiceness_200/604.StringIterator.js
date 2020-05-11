/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 * 内存溢出
 */
// eslint-disable-next-line no-unused-vars
class StringIterator {
  /**
   * @param {string} compressedString
   */
  constructor(compressedString) {
    this.uncompressedStr = [];
    this.ptr = 0;
    let count = 0;
    let lastWord = compressedString[0];
    for (let i = 1; i < compressedString.length; i++) {
      if (compressedString[i].charCodeAt() >= 48 && compressedString[i].charCodeAt() <= 57) {
        count = count * 10 + parseInt(compressedString[i], 10);
      } else {
        console.log(lastWord, count);
        for (let j = 0; j < count; j++) {
          this.uncompressedStr.push(lastWord);
        }
        lastWord = compressedString[i];
        count = 0;
      }
    }
    for (let j = 0; j < count; j++) {
      this.uncompressedStr.push(lastWord);
    }
    console.log(this.uncompressedStr);
  }

  /**
   * @return {character}
   */
  next() {
    if (!this.hasNext()) return " ";
    return this.uncompressedStr[this.ptr++];
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.ptr !== this.uncompressedStr.length;
  }
}

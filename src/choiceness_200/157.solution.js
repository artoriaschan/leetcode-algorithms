/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
// eslint-disable-next-line no-unused-vars
function solution(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    let buffer = [];
    while (n) {
      let temp = read4(buffer);
      if (n < 4 || temp < 4) {
        buf.splice(buf.length, 0, ...buffer.slice(0, Math.min(n, temp)));
        return buf.length;
      }

      buf.splice(buf.length, 0, ...buffer);
      n -= 4;
    }
    return buf.length;
  };
}

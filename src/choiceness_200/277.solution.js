/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 * 思路:
 *  双指针
 */
// eslint-disable-next-line no-unused-vars
function solution(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
    let left = 0;
    let right = n - 1;
    // 找到疑似名人放入left
    while (left !== right) {
      if (knows(left, right)) {
        ++left;
      } else {
        --right;
      }
    }
    // 遍历所有人员, 确认left是否为名人
    for (let i = 0; i < n; i++) {
      if (i !== left && (knows(left, i) || !knows(i, left))) return -1;
    }
    return left;
  };
}

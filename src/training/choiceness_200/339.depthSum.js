/* eslint-disable class-methods-use-this */
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
// eslint-disable-next-line no-unused-vars
class NestedInteger {
  isInteger() {}

  getInteger() {}

  // eslint-disable-next-line no-unused-vars
  setInteger(value) {}

  // eslint-disable-next-line no-unused-vars
  add(elem) {}

  getList() {}
}
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function depthSum(nestedList) {
  function depthSumRecursive(nestedList, point) {
    let ret = 0;
    for (let it of nestedList) {
      if (it.isInteger()) {
        ret += it.getInteger() * point;
      } else {
        ret += depthSumRecursive(it.getList(), point + 1);
      }
    }
    return ret;
  }
  return depthSumRecursive(nestedList, 1);
}

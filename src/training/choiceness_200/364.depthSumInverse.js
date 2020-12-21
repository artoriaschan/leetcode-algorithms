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
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 * 思路:
 *  用dfs和list记录每一层的元素和，最后乘上对应深度。
 */
// eslint-disable-next-line no-unused-vars
function depthSumInverse(nestedList) {
  let list = [];
  let result = 0;
  dfs(nestedList, list, 0);

  for (let i = 0; i < list.length; i++) {
    result += list[i] * (list.length - i);
  }
  return result;
}
function dfs(nestedList, list, depth) {
  if (nestedList === null) return;
  for (let i = 0; i < nestedList.length; i++) {
    if (nestedList[i].isInteger()) {
      while (list.length <= depth) {
        list.push(0);
      }
      list[depth] += nestedList[i].getInteger();
    } else {
      dfs(nestedList[i].getList(), list, depth + 1);
    }
  }
}

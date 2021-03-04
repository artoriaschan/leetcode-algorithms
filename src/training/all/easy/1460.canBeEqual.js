/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
// 最小子数组翻转就是冒泡排序。所以只要排序两个数组判断相等与否就行了
function canBeEqual(target, arr) {
  arr.sort((a, b) => a - b);
  target.sort((a, b) => a - b);
  return arr.every((num, i) => target[i] === num);
}

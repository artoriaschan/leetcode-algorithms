/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// 1、先排序数组
// 2、计算剩余数组平均值
// 3、平均值小于当前数，返回平均值
function findBestValue(arr, target) {
  if (!arr) return 0;
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let x = (target - sum) / (n - i);
    if (x < arr[i]) return Math.round(x - 0.1);
    sum += arr[i];
  }
  return arr[n - 1];
}

/**
 * 美团一面
 * 将两个有序数组合并到其中一个数组中，并且保持有序。
 */
function merge(target, other) {
  if (other.length === 0) return target;
  if (target.length === 0) return other;
  let x = target.length - 1;
  let y = other.length - 1;
  let totalLen = target.length + other.length - 1;
  while (x >= 0 && y >= 0) {
    if (target[x] < other[y]) {
      target[totalLen] = other[y];
      y--;
      totalLen--;
    } else {
      [target[x], target[totalLen]] = [target[totalLen], target[x]];
      x--;
      totalLen--;
    }
  }
  for (; y >= 0; y--) {
    target[y] = other[y];
  }
}

const arr1 = [6, 7, 8, 45, 66, 67, 68];
const arr2 = [1, 2, 3, 11, 23, 77, 78, 79];
// console.log(merge(arr1, arr2));
merge(arr1, arr2);
console.log(arr1);

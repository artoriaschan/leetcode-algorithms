/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 思路:
 *  快速排序 + 数组截取
 */
function getLeastNumbers(arr, k) {
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  return arr.slice(0, k);
}
function quickSort(arr, left, right) {
  if (left < right) {
    let i = left;
    let j = right;
    let x = arr[left];
    while (i < j) {
      while (i < j && arr[j] >= x) j--;
      if (i < j) arr[i++] = arr[j];
      while (i < j && arr[i] < x) i++;
      if (i < j) arr[j--] = arr[i];
    }
    arr[i] = x;
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
}
console.log(getLeastNumbers([3, 2, 1], 2));

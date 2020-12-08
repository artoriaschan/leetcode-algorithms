/**
 * @param {number[]} numbers
 * @return {number}
 */
// 二分查找
function minArray(numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    const mid = (low + high) >> 1;
    if (numbers[mid] < numbers[high]) {
      high = mid;
    } else if (numbers[mid] > numbers[high]) {
      low = mid + 1;
    } else {
      high--; // 最小值都在左侧
    }
  }
  return numbers[low];
}

console.log(minArray([3, 1, 1]));

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 * 思路:
 * 直接排序
 * 归并排序
 * 二分查找
 */
// eslint-disable-next-line no-unused-vars
function kthSmallest(matrix, k) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const plainArr = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      plainArr.push(matrix[i][j]);
    }
  }
  plainArr.sort((a, b) => a - b);
  return plainArr[k - 1];
}
// 二分查找
// eslint-disable-next-line no-unused-vars
function kthSmallest1(matrix, k) {
  const n = matrix.length;
  function check(mid) {
    let i = n - 1;
    let j = 0;
    let num = 0;
    while (i >= 0 && j < n) {
      if (matrix[i][j] <= mid) {
        num += i + 1;
        j++;
      } else {
        i--;
      }
    }
    return num >= k;
  }
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];
  while (left < right) {
    let mid = (left + right) >> 1;
    if (check(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

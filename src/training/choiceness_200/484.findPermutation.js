/**
 * @param {string} s
 * @return {number[]}
 * 思路:
 *  数组区间翻转
 */
// eslint-disable-next-line no-unused-vars
function findPermutation(s) {
  let arr = new Array(s.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  let i = 1;
  while (i <= s.length) {
    let j = i;
    while (i <= s.length && s[i - 1] === "D") i++;
    reverse(arr, j - 1, i);
    i++;
  }
  return arr;
}
function reverse(a, start, end) {
  for (let i = 0; i < (end - start) / 2; i++) {
    let temp = a[i + start];
    a[i + start] = a[end - i - 1];
    a[end - i - 1] = temp;
  }
}

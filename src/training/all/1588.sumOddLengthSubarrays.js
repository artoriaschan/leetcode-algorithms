/**
 * @param {number[]} arr
 * @return {number}
 */
// // 暴力
// function sumOddLengthSubarrays(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if ((j - i + 1) % 2 === 1) {
//         // 个数是奇数的，加到res上
//         for (let k = i; k <= j; k++) res += arr[k];
//       }
//     }
//   }
//   return res;
// }
// 滑动窗口
function windows(arr, len) {
  let i = 0;
  let j = 0;
  let sum1 = 0;
  let sum2 = 0;
  while (j < arr.length) {
    sum1 += arr[j];
    if (j - i + 1 === len) {
      sum2 += sum1;
      sum1 -= arr[i];
      i++;
    }
    j++;
  }
  return sum2;
}

function sumOddLengthSubarrays(arr) {
  let res = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    res += windows(arr, i);
  }
  return res;
}
const arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));

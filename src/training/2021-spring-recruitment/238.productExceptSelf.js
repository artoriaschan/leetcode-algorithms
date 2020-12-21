/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 左三角 * 右三角
function productExceptSelf(num) {
  const res = [];
  let left = 1;
  for (let i = 0; i < num.length; i++) {
    res.push(left);
    left *= num[i];
  }
  let right = 1;
  for (let i = num.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= num[i];
  }
  return res;
}

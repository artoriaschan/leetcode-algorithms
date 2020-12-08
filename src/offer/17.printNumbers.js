// 数组遍历
function printNumbers(n) {
  let limit = 1;
  for (let i = 0; i < n; i++) {
    limit *= 10;
  }
  let res = [];
  for (let i = 0; i < limit - 1; i++) {
    res[i] = i + 1;
  }
  return res;
}

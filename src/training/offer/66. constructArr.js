// 数组遍历
var constructArr = function(a) {
  let res = [];
  // 左侧三角形
  let left = 1;
  for (let i = 0; i < a.length; i++) {
    res[i] = left;
    left *= a[i];
  }
  // 右侧三角形
  let right = 1;
  for (let i = a.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= a[i];
  }
  return res;
};

// 滑动窗口
// 使用滑动窗口，设立左右指针，从开始位置维护一个子数组作为窗口，
// 判断该窗口是否求和为 target:
//  如果是则将结果加入
//  如果小于 target 则窗口右移
//  大于 target 则窗口左移
function findContinuousSequence(target) {
  let left = 1;
  let right = 2;
  let res = [];
  while (left < right) {
    let sum = ((left + right) * (right - left + 1)) / 2;
    if (sum === target) {
      let arr = [];
      for (let k = left; k <= right; k++) {
        arr[k - left] = k;
      }
      res.push(arr);
      left++;
    } else if (sum < target) {
      right++;
    } else {
      left++;
    }
  }
  return res;
}

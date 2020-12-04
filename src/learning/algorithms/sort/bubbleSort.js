function bubbleSort(arr) {
  const len = arr.length;
  if (len < 1) return;
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break;
  }
}

const arr = [11, 9, 7, 31, 9, 8, 28, 32, 34, 17, 16, 38, 46, 44, 28, 50, 30];
bubbleSort(arr);
console.log(arr);

function insertionSort(arr) {
  const len = arr.length;
  if (len <= 1) return;
  for (let i = 1; i < len; i++) {
    const item = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > item) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = item;
  }
}

const arr = [11, 9, 7, 31, 9, 8, 28, 32, 34, 17, 16, 38, 46, 44, 28, 50, 30];
insertionSort(arr);
console.log(arr);

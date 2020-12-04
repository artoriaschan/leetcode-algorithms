function selectSort(arr) {
  const len = arr.length;
  if (len <= 1) return;
  for (let i = 0; i < len; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

const arr = [11, 9, 7, 31, 9, 8, 28, 32, 34, 17, 16, 38, 46, 44, 28, 50, 30];
selectSort(arr);
console.log(arr);

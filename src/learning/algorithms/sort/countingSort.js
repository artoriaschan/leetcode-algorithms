function countingSort(arr) {
  const len = arr.length;
  if (len <= 1) return;
  let max = arr[0];
  for (let i = 0; i < len; i++) {
    if (max < arr[i]) max = arr[i];
  }
  const counting = new Array(max + 1).fill(0);
  for (let i = 0; i < len; i++) {
    counting[arr[i]]++;
  }
  for (let i = 1; i <= max; i++) {
    counting[i] += counting[i - 1];
  }

  const temp = [];
  for (let i = len - 1; i >= 0; i--) {
    const index = counting[arr[i]] - 1;
    temp[index] = arr[i];
    counting[arr[i]]--;
  }

  for (let i = 0; i < len; i++) {
    arr[i] = temp[i];
  }
}

const arr = [2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
countingSort(arr);
console.log(arr);

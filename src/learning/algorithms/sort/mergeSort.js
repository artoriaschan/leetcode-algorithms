function mergeSort(arr) {
  mergeSortInternally(arr, 0, arr.length - 1);
}
function mergeSortInternally(arr, p, r) {
  if (p >= r) return;
  const q = Math.floor((p + r) / 2);
  mergeSortInternally(arr, p, q);
  mergeSortInternally(arr, q + 1, r);
  return mergeArr(arr, p, q, r);
}

function mergeArr(arr, p, q, r) {
  let i = p;
  let j = q + 1;
  let k = 0;
  const temp = [];
  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  if (i <= q) {
    while (i <= q) {
      temp[k++] = arr[i++];
    }
  }
  if (j <= r) {
    while (j <= r) {
      temp[k++] = arr[j++];
    }
  }
  for (let i = 0; i <= r - p; i++) {
    arr[p + i] = temp[i];
  }
}

const arr = [11, 9, 7, 31, 9, 8, 28, 32, 34, 17, 16, 38, 46, 44, 28, 50, 30];
mergeSort(arr);
console.log(arr);

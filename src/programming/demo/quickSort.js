function quickSort(arr) {
  internalQuickSort(arr, 0, arr.length - 1);
}
function internalQuickSort(arr, p, r) {
  if (p >= r) return;
  const pivot = partition(arr, p, r);
  internalQuickSort(arr, p, pivot - 1);
  internalQuickSort(arr, pivot + 1, r);
}

function partition(arr, p, r) {
  const pivot = arr[r];
  let i = p;
  for (let j = p; j < r; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[r]] = [arr[r], arr[i]];
  return i;
}

const arr = [11, 9, 7, 31, 9, 8, 28, 32, 34, 17, 16, 38, 46, 44, 28, 50, 30];
quickSort(arr);
console.log(arr);

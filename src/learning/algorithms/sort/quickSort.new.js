function quickSort(arr) {
  quickSortInternally(arr, 0, arr.length - 1);
}

function quickSortInternally(arr, p, r) {
  if (p >= r) return;
  let pivot = partition(arr, p, r);
  quickSortInternally(arr, p, pivot - 1);
  quickSortInternally(arr, pivot + 1, r);
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
  // 将分区点放到正确的位置
  [arr[i], arr[r]] = [arr[r], arr[i]];
  return i;
}

const arr = [11, 9, 7, 31, 9, 8, 28, 32, 34, 17, 16, 38, 46, 44, 28, 50, 30];
quickSort(arr);
console.log(arr);

function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] === value) {
      return mid;
    }
    if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const arr = [7, 8, 9, 9, 11, 16, 17, 28, 28, 30, 31, 32, 34, 38, 44, 46, 50];
console.log(binarySearch(arr, 30));
console.log(binarySearch(arr, 9));
console.log(binarySearch(arr, 300));

function bsearch(arr, value) {
  return bsearchInternally(arr, 0, arr.length - 1, value);
}
function bsearchInternally(arr, low, high, value) {
  if (low > high) return -1;
  const mid = low + ((high - low) >> 1);
  if (arr[mid] === value) {
    return mid;
  }
  if (arr[mid] < value) {
    return bsearchInternally(arr, mid + 1, high, value);
  }
  return bsearchInternally(arr, low, mid - 1, value);
}
const arr1 = [7, 8, 9, 9, 11, 16, 17, 28, 28, 30, 31, 32, 34, 38, 44, 46, 50];
console.log(bsearch(arr1, 30));
console.log(bsearch(arr1, 9));
console.log(bsearch(arr1, 300));

function bsearchForFirstEqualValue(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] === value) {
      if (mid === 0 || arr[mid - 1] !== value) return mid;
      high = mid - 1;
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
console.log(bsearchForFirstEqualValue(arr, 9));

function bsearchForLastEqualValue(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] === value) {
      if (mid === arr.length - 1 || arr[mid + 1] !== value) return mid;
      low = mid + 1;
    }
    if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(bsearchForLastEqualValue(arr, 9));

function bsearchForFirstMoreThanValue(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] > value) {
      if (mid === 0 || arr[mid - 1] <= value) return mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(bsearchForFirstMoreThanValue(arr, 9));

function bsearchForLastLessThanValue(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1);
    if (arr[mid] >= value) {
      high = mid - 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] >= value) return mid;
      low = mid + 1;
    }
  }
  return -1;
}

console.log(bsearchForLastLessThanValue(arr, 9));

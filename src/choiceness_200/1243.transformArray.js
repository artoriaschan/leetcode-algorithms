/**
 * @param {number[]} arr
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function transformArray(arr) {
  let feed = true;
  while (feed) {
    feed = false;
    let copy = Object.assign([], arr);
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
        copy[i]--;
        feed = true;
      }
      if (arr[i] < arr[i + 1] && arr[i] < arr[i - 1]) {
        copy[i]++;
        feed = true;
      }
    }
    arr = copy;
  }
  return arr;
}

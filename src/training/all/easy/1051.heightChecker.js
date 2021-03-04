/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
  const arr = new Array(101).fill(0);
  for (let height of heights) {
    arr[height]++;
  }
  let count = 0;
  for (let i = 1, j = 0; i < arr.length; i++) {
    while (arr[i]-- > 0) {
      if (heights[j++] !== i) count++;
    }
  }
  return count;
}

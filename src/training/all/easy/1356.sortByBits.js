/**
 * @param {number[]} arr
 * @return {number[]}
 */
function sortByBits(arr) {
  const bit = new Array(10001).fill(0);
  for (let num of arr) {
    bit[num] = num
      .toString(2)
      .split("")
      .filter(item => item === "1").length;
  }
  return arr.sort((a, b) => {
    if (bit[a] !== bit[b]) {
      return bit[a] - bit[b];
    }
    return a - b;
  });
}

const arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
console.log(sortByBits(arr));

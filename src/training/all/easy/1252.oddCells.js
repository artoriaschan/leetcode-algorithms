/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
function oddCells(n, m, indices) {
  const arr = Array.from(new Array(n), () => new Array(m).fill(0));
  for (const [row, col] of indices) {
    arr[row] = arr[row].map(item => ++item);
    arr.forEach(r => r[col]++);
  }
  let res = 0;
  for (let item of arr) {
    res += item.filter(t => t % 2 === 1).length;
  }
  return res;
}

const n = 2;
const m = 3;
const indices = [
  [0, 1],
  [1, 1],
];
console.log(oddCells(n, m, indices));

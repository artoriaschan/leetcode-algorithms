/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 * 思路:
 *  模拟路径
 */
const getDistance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
// eslint-disable-next-line no-unused-vars
const minDistance = (height, width, tree, squirrel, nuts) => {
  let ans = 1000000000;
  let sumDis = 0;
  nuts.forEach(nut => {
    sumDis += getDistance(nut, tree) * 2;
  });
  nuts.forEach(firstNut => {
    let cur = sumDis - getDistance(firstNut, tree) + getDistance(firstNut, squirrel);
    ans = Math.min(ans, cur);
  });
  return ans;
};

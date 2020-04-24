/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
function arraysIntersection(arr1, arr2, arr3) {
  let ans = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
      ans.push(arr1[i]);
    }
  }
  return ans;
}

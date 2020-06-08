/**
 * @param {number} n
 * @return {number[][]}
 * 思路:
 *  回溯法
 */
// eslint-disable-next-line no-unused-vars
function getFactors(n) {
  const ans = [];
  const backtrack = arr => {
    ans.push(arr);
    for (let i = arr[arr.length - 2]; i <= Math.sqrt(arr[arr.length - 1]); ++i) {
      if (arr[arr.length - 1] % i === 0) {
        let temp = arr.slice(0, arr.length - 1);
        temp.push(i);
        temp.push(arr[arr.length - 1] / i);
        backtrack(temp);
      }
    }
  };

  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      let temp = [i, n / i];
      backtrack(temp);
    }
  }
  return ans;
}

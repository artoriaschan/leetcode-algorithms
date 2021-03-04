/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumbers(nums) {
  let res = 0;
  for (let num of nums) {
    if (num.toString().length % 2 === 0) res++;
  }
  return res;
}

const nums = [555, 901, 482, 1771];
console.log(findNumbers(nums));

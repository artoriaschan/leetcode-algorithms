/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParityII(nums) {
  const res = [];
  let evenIndex = 0;
  let oddIndex = 1;
  for (let num of nums) {
    if (num % 2 === 0) {
      res[evenIndex] = num;
      evenIndex += 2;
    } else {
      res[oddIndex] = num;
      oddIndex += 2;
    }
  }
  return res;
}

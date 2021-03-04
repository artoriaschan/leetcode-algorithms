/**
 * @param {number[]} nums
 * @return {number[]}
 */
function smallerNumbersThanCurrent(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[j] < nums[i]) count++;
    }
    res.push(count);
  }
  return res;
}

const nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));

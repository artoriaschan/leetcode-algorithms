/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  // console.log(nums)
  let i = 0;
  let length = nums.length;
  let closestNum = Math.abs(target - (nums[0] + nums[1] + nums[2]));
  let result;
  while (i <= length - 3) {
    let a = nums[i],
      j = i + 1;
    while (j <= length - 2) {
      k = j + 1;
      while (k <= length - 1) {
        // console.log(i, j, k)
        var b = nums[j],
          c = nums[k];
        var sum = a + b + c;
        let newClosesetNum = Math.abs(target - sum);
        // console.log("a=%d,b=%d,c=%d,closestNum=%d,%d - %d=%d", a, b, c, closestNum, target, sum, newClosesetNum)
        if (newClosesetNum === 0) {
          result = sum;
          return result;
        } else if (newClosesetNum <= closestNum) {
          closestNum = newClosesetNum;
          result = sum;
        }
        k++;
      }
      j++;
    }
    i++;
  }
  return result;
};

let nums = [-1, 2, 1, -4];
let target = 1;
console.log(threeSumClosest(nums, target));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 双指针法
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1
    let startIndex = -1
    let endIndex = -1
    while(left <= right){
        console.log(left, right)
        if(nums[left] !== target){
            left ++
        }
        if(nums[right] !== target) {
            right --
        }
        if(nums[right] === target && nums[left] === target) {
            startIndex = left
            endIndex = right
            break
        }
    }
    return [startIndex, endIndex]
};

let nums = [5,7,7,8,8,10], target = 6
console.log(searchRange(nums, target))
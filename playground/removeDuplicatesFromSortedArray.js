/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp = []
    for(let i = 0; i < nums.length; i ++) {
        if(temp.indexOf(nums[i]) < 0) {
            temp.push(nums[i])
        }else{
            nums.splice(i, 1)
            i --
        }
    }
    return nums.length
    // two pointers
    // 这样的做法是将数组的前几位变成无重复元素的数组
    // let i = 0;
    // for(let j = 0; j < nums.length; j ++) {
    //     if(nums[j] != nums[i]){
    //         i ++
    //         nums[i] = nums[j]
    //     }
    // }
    // console.log(nums)
    // return i + 1
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => {
        return a - b
    })
    let i = 0
    let length = nums.length
    let arr = []
    while(i < length - 1){
        let a = nums[i], j = i + 1, k = length - 1
        while(j < k) {
            var b = nums[j],c = nums[k];
            var sum = a + b + c;
            if(sum == 0) arr.push([a,b,c]);//存起来
            if(sum <= 0)
                while(nums[j] == b&&j < k) j ++;//第2个数
            if(sum >= 0)
                while(nums[k] == c&&j < k) k --//最后一个数
        }
        while( nums[i] == a && i < length - 1) i++;//第一个数
    }
    return arr
};

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))
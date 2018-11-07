/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim()
    if(!str || str === "-" || str === "+") return 0
    if((str[0].charCodeAt() < 58 && str[0].charCodeAt() > 47) || ((str[0].charCodeAt() === 45 || str[0].charCodeAt() === 43) && str[1].charCodeAt() < 58 && str[1].charCodeAt() > 47)) {
        let numberReg = /(([\-\+]{1})?[0-9]+)/
        let stringNum = str.match(numberReg)
        if(!stringNum) return 0
        let realNum = parseInt(stringNum[0])
        let max = 2 ** 31 - 1, min = (-2) ** 31
        if(realNum > max){
            return max
        }else if(realNum < min) {
            return min
        }
        return realNum
    }
    return 0
};
// 使用parseInt
var otherMyAtoi = function(str) {
    let num = parseInt(str)
    if(isNaN(num)){
        return 0
    }
    let max = 2 ** 31 - 1, min = (-2) ** 31
    if(num > max){
        return max
    }else if(num < min) {
        return min
    }
    return num
};
let str = "words and 987"
console.log(myAtoi(str))
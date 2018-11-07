/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max = (2**31 - 1), min = -(2**31)
    let str = new String(x)
    let strArray = str.split("")
    let sign = strArray[0] === "-"
    strArray.reverse()
    if(sign) {
        strArray.splice(strArray.length - 1, 1)
        strArray.splice( 0, 0, "-")
    }
    let reverseNum = parseInt(strArray.join(""))
    if(reverseNum < min || reverseNum > max ) return 0
    return reverseNum
};

let num = 1534236469
console.log(reverse(num))
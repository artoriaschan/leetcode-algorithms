/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length <= 0) return ""
    if(strs.length === 1) return strs[0]
    let first = strs.splice(0, 1)[0]
    if(first === "") return ""
    let commonIndex = 0
    let stop = false
    while(!stop) {
        for(let i = 0; i < strs.length; i ++) {
            let strList = strs[i]
            if(strs[i] === "") {
                stop = true
                commonIndex = 0
                break
            }
            if(first[commonIndex] !== strList[commonIndex]) {
                stop = true
            }else{
                if(i === strs.length - 1){
                    commonIndex ++
                }
            }
            if(first.length === commonIndex) {
                stop = true
            }
            if(stop) break
        }
    }
    return first.slice( 0, commonIndex)
};
let strs = ["c","c"]
console.log(longestCommonPrefix(strs))
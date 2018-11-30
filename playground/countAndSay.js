/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if ( n <= 0 ) return ""
    let result = "1"
    while(--n){
        let cur = ""
        for(let i = 0; i < result.length; i ++) {
            let count = 1
            while( i + 1 < result.length && result[i] === result[i + 1]) {
                count ++
                i ++
            }
            cur += count + result[i]
        }
        result = cur
    }
    return result
};

let n = 6
console.log(countAndSay(n))
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * 
 * 有超时问题
 */

var numDistinct = function(s, t) {
    if(t.length > s.length) return 0
    let count = 0
    let letterMap = new Map()
    for(let i = 0; i < s.length; i ++) {
        if(letterMap.get(s[i]) === undefined) {
            letterMap.set(s[i], [i])
        }else{
            // console.info("get", s[i], letterMap.get(s[i]))
            let arr = letterMap.get(s[i])
            arr.push(i)
        }
    }
    // console.info(letterMap)
    let FindDistinct = function(t, pos, prevLetterPos) {
        if(pos > t.length - 1) {
            count ++
            return 
        }
        if( letterMap.get(t[pos]) !== undefined) {
            for(let i of letterMap.get(t[pos])) {
                if(s[i] === t[pos]) {
                    if(i <= prevLetterPos) {
                        continue
                    }else{
                        FindDistinct(t, pos + 1, i)
                    }
                }
            }
        }
    }
    FindDistinct(t, 0, -1)
    return count
};

let s = "babgbag", t = "bag"
console.log(numDistinct(s, t))
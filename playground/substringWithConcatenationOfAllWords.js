/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * 
 * 判断是否符合条件是一个难点
 * 
 * 使用双Map来做校验,一个存words单次出现次数,另一个存子串的出现次数
 */
var findSubstring = function(s, words) {
    if(words.length === 0) return []

    let wordsStr = words.join("")
    let wordsStrLength = wordsStr.length
    let wordLength = words[0].length
    let wordsLength = words.length

    if(s.length < wordsStrLength) return []
    let indexArray = []
    let wordsMap = new Map()
    for(let word of words) {
        let value = wordsMap.get(word);
        if(value){
            value += 1
        }else{
            value = 1
        }
        wordsMap.set(word, value)
    }
    console.log(wordsMap)
    for(let i = 0; i < s.length - wordsStrLength + 1; i ++) {
        let subStr = s.slice(i, i + wordsStrLength)
        let num = 0
        let hasWords = new Map()
        while(num < wordsLength) {
            let value = subStr.slice(num * wordLength, num * wordLength + wordLength)
            if(wordsMap.has(value)) {
                console.log(value)
                let count = hasWords.get(value);
                if(count){
                    count += 1
                }else{
                    count = 1
                }
                hasWords.set(value, count)
                console.log(hasWords)
                if(hasWords.get(value) > wordsMap.get(value)){
                    break
                }
            }else{
                break
            }
            num ++
        }
        if(num === wordsLength) {
            indexArray.push(i)
        }
    }
    return indexArray
};

let s = "barfoothefoobarman",words = ["foo","bar"]
console.log(findSubstring(s, words))
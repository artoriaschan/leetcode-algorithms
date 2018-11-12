/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return []
    let wordList = [""]
    let digit2WordMap = new Map()
    digit2WordMap.set("2", "abc")
    digit2WordMap.set("3", "def")
    digit2WordMap.set("4", "ghi")
    digit2WordMap.set("5", "jkl")
    digit2WordMap.set("6", "mno")
    digit2WordMap.set("7", "pqrs")
    digit2WordMap.set("8", "tuv")
    digit2WordMap.set("9", "wxyz")

    digits = digits.split("")
    for (let digit of digits) {
        new_wordList = []
        for (let word of wordList) {
            for (let letter of digit2WordMap.get(digit)) {
                new_wordList.push(word + letter)
            }
        }
        wordList = new_wordList
    }
    return wordList
};

let digits = "23"
console.log(letterCombinations(digits))
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanMaps = new Map()
    romanMaps.set("I", 1)
    romanMaps.set("V", 5)
    romanMaps.set("X", 10)
    romanMaps.set("L", 50)
    romanMaps.set("C", 100)
    romanMaps.set("D", 500)
    romanMaps.set("M", 1000)
    let romanList = s.split("")
    romanList.reverse()
    let num = 0
    for(let i = 0; i < romanList.length; i ++){
        if(romanMaps.get(romanList[i]) < romanMaps.get(romanList[i - 1])){
            num -= romanMaps.get(romanList[i])
            continue
        }
        num += romanMaps.get(romanList[i])
    }
    if(num < 1 || num > 3999) return 0
    return num
};

console.log(romanToInt("IV"))
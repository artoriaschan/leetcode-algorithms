/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * KMP算法
 */
var strStr = function(haystack, needle) {
    let haystack_length = haystack.length
    let needle_length = needle.length
    if(needle_length > haystack_length) {
        return -1
    }
    if(needle_length === 0 ) {
        return 0
    }
    if(haystack_length === 0 ) {
        return -1
    }
    for(let i = 0; i < haystack_length; i ++) {
        if(i + needle_length < haystack_length) {
            if(haystack.slice(i, i + needle_length) === needle) {
                return i
            }
        }else{
            if(haystack.slice(i, i + needle_length) === needle) {
                return i
            }else{
                return -1
            }
        }
    }
};

let haystack = "mississippi", needle = "a"
console.log(strStr(haystack, needle))
/**
 * @param {number} n
 * @return {string[]}
 * 
 * 全排列问题,去重,检验有效性 => 超出时间
 * 回溯法
 * 闭合数
 */
var generateParenthesis = function(n) {
    // 回溯法
    function backtrack(ans, cur, open, close, max) {
        if (cur.length === max * 2) {
            ans.push(cur)
            return
        }

        if (open < max)
            backtrack(ans, cur+"(", open+1, close, max);
        if (close < open)
            backtrack(ans, cur+")", open, close+1, max);
    }
    // 闭合数
    function closeNum(ans){
        if(n === 0){
            ans.push("")
        }else{
            for(let i = 0; i < n; i ++){
                for(let left of generateParenthesis(i))
                    for(let right of generateParenthesis(n - 1 - i))
                        ans.push("(" + left + ")" + right)
            }
        }
    }
    let ans = []
    // backtrack(ans, "", 0, 0, n)
    closeNum(ans)
    return ans
};
console.log(generateParenthesis(5))
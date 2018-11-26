/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * 依次检测是否合格
 */
var isValidSudoku = function(board) {
    let firstLevelLength = board.length
    let secondLevelLength = board[0].length
    // 判断行
    for(let i = 0; i < firstLevelLength; i ++) {
        if(hasSameElem(board[i])){
            return false
        }
    }
    // 判断列
    for(let j = 0; j < secondLevelLength; j ++) {
        let colArr = []
        for(let i = 0; i < firstLevelLength; i ++) {
            colArr.push(board[i][j])
        }
        if(hasSameElem(colArr)) {
            return false
        }
    }
    // 判断 3x3 行列式是否满足
    let col = 0
    let row = 0
    while(col < 9){
        for(; row < 9; row += 3){
            let arr = []
            for(let i = 0;i < 3; i ++){
                for(let j = 0;j < 3; j ++){
                    arr.push(board[row + i][col + j])
                }
            }
            if(hasSameElem(arr)) {
                return false
            }
        }
        col += 3
        row = 0
    }
    return true
};

var hasSameElem = function(chars) {
    chars = chars.join("").replace(/\./g,"").split("")
    if((new Set(chars)).size != chars.length){
        return true
    }
    return false
}

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]

console.log(isValidSudoku(board))
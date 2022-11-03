use std::collections::VecDeque;

/**
 * https://leetcode.cn/problems/surrounded-regions/
 */

struct Solution {}

impl Solution {
    // DFS
    // 任何边界上的 O 都不会被填充为 X。 我们可以想到，所有的不被包围的 O 都直接或间接与边界上的 O 相连。
    // 所以找出与边界 O 相连的 O，并标记。
    fn dfs(board: &mut Vec<Vec<char>>, x: usize, y: usize, n: usize, m: usize) {
        if x < 0 || x >= n || y < 0 || y >= m || board[x][y] != 'O' {
            return;
        }
        // 我们把标记过的字母 O 修改为字母 A
        board[x][y] = 'A';
        // 上
        Self::dfs(board, x - 1, y, n, m);
        // 下
        Self::dfs(board, x + 1, y, n, m);
        // 左
        Self::dfs(board, x, y - 1, n, m);
        // 右
        Self::dfs(board, x, y + 1, n, m);
    }
    pub fn solve_dfs(board: &mut Vec<Vec<char>>) {
        let n = board.len();
        if n == 0 {
            return;
        }
        let m = board[0].len();
        // 第一列和最后一列
        for i in 0..n {
            Self::dfs(board, i, 0, n, m);
            Self::dfs(board, i, m - 1, n, m);
        }
        // 第一行和最后一行
        for i in 1..m {
            Self::dfs(board, 0, i, n, m);
            Self::dfs(board, n - 1, i, n, m);
        }
        // 最后我们遍历这个矩阵，对于每一个字母：
        for i in 0..n {
            for j in 0..m {
                if board[i][j] == 'A' {
                    // 如果该字母被标记过，则该字母为没有被字母 X 包围的字母 O，我们将其还原为字母 O
                    board[i][j] = 'O';
                } else if board[i][j] == 'O' {
                    // 如果该字母没有被标记过，则该字母为被字母 X 包围的字母 O，我们将其修改为字母 X
                    board[i][j] = 'X';
                }
            }
        }
    }
    // BFS
    pub fn solve_bfs(board: &mut Vec<Vec<char>>) {
        let dx = vec![1, -1, 0, 0];
        let dy = vec![0, 0, 1, -1];
        let n = board.len();
        if n == 0 {
            return;
        }
        let m = board[0].len();
        let mut queue = VecDeque::new();
        for i in 0..n {
            if board[i][0] == 'O' {
                queue.push_back([i, 0]);
                board[i][0] = 'A';
            }
            if board[i][m - 1] == 'O' {
                queue.push_back([i, m - 1]);
                board[i][m - 1] = 'A';
            }
        }
        for i in 1..m {
            if board[0][i] == 'O' {
                queue.push_back([0, i]);
                board[0][i] = 'A';
            }
            if board[n - 1][i] == 'O' {
                queue.push_back([n - 1, i]);
                board[n - 1][i] = 'A';
            }
        }

        while !queue.is_empty() {
            if let Some(point) = queue.pop_front() {
                let (x, y) = (point[0], point[1]);
                for i in 0..4 {
                    let (mx, my) = ((x as i32 + dx[i]) as usize, (y as i32 + dy[i]) as usize);
                    if mx < 0 || my < 0 || mx >= n || my >= m || board[mx][my] != 'O' {
                        continue;
                    }
                    queue.push_back([mx, my]);
                    board[mx][my] = 'A';
                }
            }
        }

        for i in 0..n {
            for j in 0..m {
                if board[i][j] == 'A' {
                    board[i][j] = 'O';
                } else if board[i][j] == 'O' {
                    board[i][j] = 'X';
                }
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let mut board = vec![
            vec!['X', 'X', 'X', 'X'],
            vec!['X', 'O', 'O', 'X'],
            vec!['X', 'X', 'O', 'X'],
            vec!['X', 'O', 'X', 'X'],
        ];

        let mut board1 = board.clone();

        let expect_result = vec![
            vec!['X', 'X', 'X', 'X'],
            vec!['X', 'X', 'X', 'X'],
            vec!['X', 'X', 'X', 'X'],
            vec!['X', 'O', 'X', 'X'],
        ];
        Solution::solve_dfs(&mut board);
        Solution::solve_bfs(&mut board1);
        assert_eq!(board, expect_result);
        assert_eq!(board1, expect_result);
    }
}

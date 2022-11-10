/**
 * https://leetcode.cn/problems/largest-plus-sign/
 */

struct Solution {}
impl Solution {
    fn find(grid: &Vec<Vec<i32>>, x: usize, y: usize, n: usize) -> i32 {
        if grid[x][y] == 1 {
            return 0;
        }
        let mut k = 1;
        loop {
            if (x as i32 - k as i32) < 0 {
                break;
            }
            if (y as i32 - k as i32) < 0 {
                break;
            }
            if x + k == n {
                break;
            }
            if y + k == n {
                break;
            }
            if grid[x - k][y] == 1
                || grid[x + k][y] == 1
                || grid[x][y - k] == 1
                || grid[x][y + k] == 1
            {
                break;
            }
            k += 1;
        }
        k as i32
    }
    pub fn order_of_largest_plus_sign1(n: i32, mines: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut ans = 0;
        let mut grid = vec![vec![0; n]; n];

        for i in 0..mines.len() {
            grid[mines[i][0] as usize][mines[i][1] as usize] = 1;
        }

        for i in 0..n {
            for j in 0..n {
                let k = Self::find(&grid, i, j, n);
                ans = ans.max(k)
            }
        }
        ans
    }
    // 动态规划
    pub fn order_of_largest_plus_sign(n: i32, mines: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let banned: std::collections::HashSet<_> = mines
            .into_iter()
            .map(|a| (a[0] as usize, a[1] as usize))
            .collect();
        let mut dp = vec![vec![i32::MAX; n]; n];
        for i in 0..n {
            // left
            let mut cnt = 0;
            for j in 0..n {
                if banned.get(&(i, j)).is_some() {
                    cnt = 0;
                } else {
                    cnt += 1;
                }
                dp[i][j] = cnt.min(dp[i][j])
            }
            // right
            let mut cnt = 0;
            for j in (0..n).rev() {
                if banned.get(&(i, j)).is_some() {
                    cnt = 0;
                } else {
                    cnt += 1;
                }
                dp[i][j] = cnt.min(dp[i][j])
            }
        }
        for j in 0..n {
            // up
            let mut cnt = 0;
            for i in 0..n {
                if banned.get(&(i, j)).is_some() {
                    cnt = 0;
                } else {
                    cnt += 1;
                }
                dp[i][j] = cnt.min(dp[i][j])
            }
            // down
            let mut cnt = 0;
            for i in (0..n).rev() {
                if banned.get(&(i, j)).is_some() {
                    cnt = 0;
                } else {
                    cnt += 1;
                }
                dp[i][j] = cnt.min(dp[i][j])
            }
        }
        dp.into_iter()
            .fold(0, |ans, row| ans.max(row.into_iter().max().unwrap()))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let n = 5;
        let mines = vec![vec![4, 2]];
        assert_eq!(Solution::order_of_largest_plus_sign(n, mines), 2);
    }
}

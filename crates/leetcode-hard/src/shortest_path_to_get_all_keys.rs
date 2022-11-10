/**
 * https://leetcode.cn/problems/shortest-path-to-get-all-keys/
 */
struct Solution {}
const DIRECTIONS: [i32; 5] = [0, -1, 0, 1, 0];
impl Solution {
    pub fn shortest_path_all_keys(grid: Vec<String>) -> i32 {
        let n = grid.len();
        let m = grid[0].len();
        // 起点
        let mut i = -1;
        let mut j = -1;
        // 钥匙个数
        let mut k = 0;

        for a in 0..n {
            for b in 0..m {
                let c = grid[a].as_bytes()[b];
                if c == b'@' {
                    i = a as i32;
                    j = b as i32;
                } else if c >= b'a' && c <= b'f' {
                    k = k.max(c - b'a' + 1);
                }
            }
        }
        // 统计步数
        let mut step = 0;
        // 钥匙状态压缩
        let keys = (1 << k) - 1;
        // BFS访问记录
        let mut visited = std::collections::HashSet::new();
        let mut queue = std::collections::VecDeque::new();
        visited.insert((i, j, 0));
        queue.push_back((i, j, 0));

        while !queue.is_empty() {
            let mut len = queue.len();

            while len > 0 {
                len -= 1;
                let curr = queue.pop_front().unwrap();
                // 已经获得全部钥匙
                if curr.2 == keys {
                    return step;
                }

                for i in 0..4 {
                    let x = curr.0 + DIRECTIONS[i];
                    let y = curr.1 + DIRECTIONS[i + 1];
                    // 边界判断
                    if x < 0 || x >= n as i32 || y < 0 || y >= m as i32 {
                        continue;
                    }

                    let c = grid[x as usize].as_bytes()[y as usize];
                    // 墙壁碰撞判断
                    if c == b'#' {
                        continue;
                    }
                    // 碰到锁，判断当前是否存在钥匙可能开锁
                    if c >= b'A' && c <= b'F' && (curr.2 & (1 << (c - b'A'))) == 0 {
                        continue;
                    }

                    let mut key = curr.2;
                    // 收集钥匙
                    if c >= b'a' && c <= b'f' {
                        key |= (1 << (c - b'a'));
                    }

                    let next = (x, y, key);

                    // 已经访问过该节点，跳过
                    if visited.contains(&next) {
                        continue;
                    }

                    visited.insert(next);
                    queue.push_back(next);
                }
            }
            step += 1;
        }

        -1
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let grid = ["@..aA", "..B#.", "....b"].map(String::from).to_vec();
        assert_eq!(Solution::shortest_path_all_keys(grid), 6);
    }
}

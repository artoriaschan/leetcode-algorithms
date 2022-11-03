/**
 * https://leetcode.cn/problems/coordinate-with-maximum-network-quality/
 */

struct Solution {}

impl Solution {
    pub fn best_coordinate(towers: Vec<Vec<i32>>, radius: i32) -> Vec<i32> {
        let mut ans = vec![0, 0];
        let mut max_value = 0;
        // 根据给出的范围遍历, 0 <= xi, yi, qi <= 50
        for i in 0..=50 {
            for j in 0..=50 {
                let mut signal = 0;
                for tower in towers.iter() {
                    let ti = tower[0];
                    let tj = tower[1];
                    // 求距离
                    let dist = (ti - i) * (ti - i) + (tj - j) * (tj - j);
                    // 信号范围内累加
                    if dist <= radius * radius {
                        // 求解信号值
                        signal += (tower[2] as f64 / (1.0 + (dist as f64).sqrt())).floor() as i32
                    }
                }
                if signal > max_value {
                    ans[0] = i;
                    ans[1] = j;
                    max_value = signal;
                }
            }
        }
        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let towers = vec![vec![1, 2, 5], vec![2, 1, 7], vec![3, 1, 9]];
        let radius = 2;
        assert_eq!(Solution::best_coordinate(towers, radius), vec![2, 1]);
    }
}

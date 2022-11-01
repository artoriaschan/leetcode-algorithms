use std::collections::{HashSet, VecDeque};

/**
 * https://leetcode.cn/problems/k-similar-strings/
 */

struct Solution {}

impl Solution {
    pub fn k_similarity(s1: String, s2: String) -> i32 {
        fn dfs(s: &mut Vec<u8>, t: &Vec<u8>, mut pos: usize, cost: usize, ans: &mut usize) {
            if cost > *ans {
                return;
            }
            while pos < t.len() && s[pos] == t[pos] {
                pos += 1;
            }

            if pos == t.len() {
                *ans = cost.min(*ans);
                return;
            }

            let diff = (pos..t.len()).fold(0, |_x, j| (s[j] != t[j]) as usize);
            let min_swap = (diff + 1) >> 1;
            // 如果当前最少交换次数下限满足 cur ≥ ans 时，则表明当前的字符串 s1′ 已经不是更优的搜索状态，可直接提前终止搜索。
            if cost + min_swap >= *ans {
                return;
            }

            for j in pos + 1..t.len() {
                if s[j] == t[pos] {
                    s.swap(pos, j);
                    dfs(s, t, pos + 1, cost + 1, ans);
                    s.swap(pos, j);
                }
            }
        }

        let mut s = s1.into_bytes();
        let mut t = s2.into_bytes();
        let mut i = 0;

        // 我们只需要计算两个字符 s1, s2 中同一位置不同的字符的交换次数即可，同一位置相同的字符直接可以跳过。
        for j in 0..s.len() {
            let (a, b) = (s[j], t[j]);
            if a != b {
                s[i] = a;
                t[i] = b;
                i += 1;
            }
        }

        if i == 0 {
            return 0;
        }

        unsafe {
            s.set_len(i);
            t.set_len(i);
        }

        let mut ans = s.len();
        dfs(&mut s, &t, 0, 0, &mut ans);
        ans as i32
    }
    pub fn k_similarity1(s1: String, s2: String) -> i32 {
        let n = s1.len();
        let a = s1.chars().collect::<Vec<_>>();
        let b = s2.chars().collect::<Vec<_>>();
        let mut ans = 0;
        let mut seen = HashSet::new();
        let mut queue = VecDeque::new();
        queue.push_back(a);

        while !queue.is_empty() {
            let queue_size = queue.len();
            for _ in 0..queue_size {
                if let Some(mut v) = queue.pop_front() {
                    if v == b {
                        return ans;
                    }

                    let mut i = 0;

                    while v[i] == b[i] {
                        i += 1;
                    }

                    let mut j = i + 1;

                    while j < n {
                        if v[j] == b[i] {
                            v.swap(i, j);
                            if seen.insert(v.clone()) {
                                queue.push_back(v.clone());
                            }
                            v.swap(i, j);
                        }
                        j += 1;
                    }
                }
            }
            ans += 1;
        }
        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let s1 = String::from("ab");
        let s2 = String::from("ba");

        assert_eq!(Solution::k_similarity(s1, s2), 1);
    }
}

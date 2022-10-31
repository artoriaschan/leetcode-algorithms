/**
 * https://leetcode.cn/problems/queue-reconstruction-by-height/
 */

struct Solution {}

impl Solution {
    pub fn reconstruct_queue(people: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        //
        let mut people = people;
        let mut ans = vec![];

        people.sort_by(|a, b| b[0].cmp(&a[0]).then(a[1].cmp(&b[1])));

        for p in people.iter() {
            println!("{:?}", p);
            ans.insert(p[1] as usize, p.to_vec());
        }
        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let people = vec![
            vec![7, 0],
            vec![4, 4],
            vec![7, 1],
            vec![5, 0],
            vec![6, 1],
            vec![5, 2],
        ];
        let expect_result = vec![
            vec![5, 0],
            vec![7, 0],
            vec![5, 2],
            vec![6, 1],
            vec![4, 4],
            vec![7, 1],
        ];
        assert_eq!(Solution::reconstruct_queue(people), expect_result);
    }
}

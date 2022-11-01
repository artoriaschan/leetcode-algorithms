/**
 * https://leetcode.cn/problems/count-of-smaller-numbers-after-self/
 */

struct Solution {}

impl Solution {
    // 归并排序 + 计算逆序对
    pub fn count_smaller(nums: Vec<i32>) -> Vec<i32> {
        let mut nums_with_indices = vec![];
        let mut tmp = vec![];
        for (index, &n) in nums.iter().enumerate() {
            nums_with_indices.push((index, n));
            tmp.push((index, n));
        }
        let mut ans = vec![0; nums.len()];
        Self::merge_sort(
            &mut nums_with_indices,
            &mut tmp,
            &mut ans,
            0,
            nums.len() as i32 - 1,
        );
        ans
    }

    fn merge_sort(
        nums: &mut Vec<(usize, i32)>,
        tmp: &mut Vec<(usize, i32)>,
        reverse_cnt: &mut Vec<i32>,
        start: i32,
        end: i32,
    ) {
        if start >= end {
            return;
        }

        let mid = start + (end - start) / 2;
        Self::merge_sort(nums, tmp, reverse_cnt, start, mid);
        Self::merge_sort(nums, tmp, reverse_cnt, mid + 1, end);
        // 在归并排序的合并过程中，是针对两个已经排好序的序列合并
        Self::merge(nums, tmp, reverse_cnt, start, mid, end);
    }

    fn merge(
        nums: &mut Vec<(usize, i32)>,
        tmp: &mut Vec<(usize, i32)>,
        reverse_cnt: &mut Vec<i32>,
        start: i32,
        mid: i32,
        end: i32,
    ) {
        // 因为是在已经排好序的序列中，右侧小于左侧的元素的贡献值具有累加性
        let mut cnt = 0;
        let mut ptr1 = start;
        let mut ptr2 = mid + 1;
        let mut ptr = start;

        while ptr2 <= end && ptr1 <= mid {
            // 发现逆序对
            if nums[ptr1 as usize].1 > nums[ptr2 as usize].1 {
                // 较小元素入tmp
                tmp[ptr as usize] = nums[ptr2 as usize];
                // 统计贡献值
                cnt += 1;
                // 右侧指针后移
                ptr2 += 1;
                ptr += 1;
            } else {
                // 较小元素入tmp
                tmp[ptr as usize] = nums[ptr1 as usize];
                // 累加贡献值
                reverse_cnt[nums[ptr1 as usize].0] += cnt;
                // 左侧指针后移
                ptr1 += 1;
                ptr += 1;
            }
        }
        // 左侧有剩余元素
        while ptr1 <= mid {
            tmp[ptr as usize] = nums[ptr1 as usize];
            // 累加贡献值
            reverse_cnt[nums[ptr1 as usize].0] += cnt;
            ptr1 += 1;
            ptr += 1;
        }

        // 右侧侧有剩余元素
        while ptr2 <= end {
            tmp[ptr as usize] = nums[ptr2 as usize];
            ptr2 += 1;
            ptr += 1;
        }
        // 写入排序后的片段
        for i in start..=end {
            nums[i as usize] = tmp[i as usize];
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let nums: Vec<i32> = [5, 2, 6, 1].into();
        let expect_result: Vec<i32> = [2, 1, 1, 0].into();
        assert_eq!(Solution::count_smaller(nums), expect_result);
    }
}

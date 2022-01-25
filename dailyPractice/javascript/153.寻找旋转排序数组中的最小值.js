/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let mid = left + ((right - left) >> 1);

        if(nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
};
// @lc code=end

console.log(findMin([3, 4, 5, 1, 2]));

/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === nums[right]) {
        right--;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
};
// @lc code=end

console.log(findMin((nums = [2, 2, 2, 0, 1])));
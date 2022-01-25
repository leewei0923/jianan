/**
 * author leewei
 * date 2021-11-26
 * tash 寻找旋转排序数组中的最小值 https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 */


var findMin = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        mid = start + ((end - start) >> 1);
        if(nums[mid] < nums[end]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return nums[start];
};

console.log(findMin((nums = [2, 3, 4, 5, 1])));
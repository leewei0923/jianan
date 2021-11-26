/**
 * author leewei
 * date 2021-11-26
 * task 寻找峰值
 */

var findPeakElement = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end) {
        let mid = start + ((end - start) >> 1);

        if(nums[mid] > nums[mid + 1]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return end;
};

// console.log(findPeakElement((nums = [1, 2, 3, 1])));
console.log(findPeakElement((nums = [1,3,2])));
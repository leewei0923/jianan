/**
 * author: leewei
 * data: 2022.01.18
 * title: 704. 二分查找 / https://leetcode-cn.com/problems/binary-search/
 * count: 9
 * status: ok
 */

var search = function (nums, target) {
    let start = 0;
    let end = nums.length;

    while(start <= end) {
        let mid = start + ((end - start) >> 1);

        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};

console.log(search([-1,0,3,5,9,12],2));
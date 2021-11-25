/**
 * author leewei
 * date 2021-11-25
 * task 搜索旋转数组 https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * tags 二分法 数组
 */

var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = start + ((end - start) >> 1);

    if (nums[mid] === target) return mid;
    // 如果中值大于开始值 最左边到中值是有序的
    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // 否则是在右边
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

// search(nums = [4,5,6,7,0,1,2], target = 0)
console.log(search((nums = [4, 5, 6, 7, 0, 1, 2]), (target = 3)));

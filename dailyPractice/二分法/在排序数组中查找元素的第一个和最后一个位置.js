/**
 * author leewei
 * date 2021-11-27
 * task 在排序数组中查找元素的第一个和最后一个位置 https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

var searchRange = function (nums, target) {
  let res = [-1, -1];
  let leftIndex = bindarySearch(nums, target, true);
  let rightIndex = bindarySearch(nums, target, false) - 1;

  if (
    leftIndex <= rightIndex &&
    rightIndex < nums.length &&
    nums[leftIndex] === target &&
    nums[rightIndex] === target
  ) {
    res = [leftIndex, rightIndex];
  }
  return res;
};

function bindarySearch(nums, target, lower) {
  let l = 0;
  let r = nums.length - 1;
  let res = nums.length;

  while (l <= r) {
    let mid = l + ((r - l) >> 1);

    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      r = mid - 1;
      res = mid;
    } else {
      l = mid + 1;
    }
  }

  return res;
}

console.log(searchRange((nums = [5, 7, 7, 8, 8, 10]), (target = 8)));
// console.log(searchRange((nums = [], target = 0)));

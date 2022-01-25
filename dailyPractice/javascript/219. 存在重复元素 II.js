/**
 * author: leewei
 * data: 2022.01.19
 * title: 219. 存在重复元素 II / https://leetcode-cn.com/problems/contains-duplicate-ii/
 * status: ok
 */
//暴力
var containsNearbyDuplicate1 = function (nums, k) {
    for(let i =0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j] && Math.abs(i- j) <= k) {
                return true;
            }
        }
    }

    return false;
};

// 双指针
var containsNearbyDuplicate2 = function (nums, k) {
  const map = new Map();
  const len = nums.length;
  for(let i = 0; i < len; i++) {
      const num = nums[i];
      if(map.has(num) && Math.abs(i - map.get(num)) <= k) {
        return true;
      }

      map.set(num,i);
  }

  return false;
};

// 滑动窗口
var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  const len = nums.length;

  for(let i = 0; i < len; i++) {
      if(i > k) {
          set.delete(nums[i - k - 1]);
      }

      if(set.has(nums[i])) {
          return true;
      }

      set.add(nums[i]);
  }

  return false;
};
// console.log(containsNearbyDuplicate([1, 2, 3, 1],3));
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

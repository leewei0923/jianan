/**
 * author: leewei
 * data: 2022.01.13
 * title: 747. 至少是其他数字两倍的最大数 / https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
 * count: 1
 */

var dominantIndex1 = function (nums) {
  const newList = [...nums];
  nums.sort((a, b) => b - a);
  if(nums[0] >= nums[1] *2) {
      return newList.indexOf(nums[0]);
  } else if(nums.length == 1){
      return 0;
  } else {
      return -1;
  }
};


var dominantIndex = function (nums) {
  let maxNum = nums[0];
  let secondNum = nums[1];

  if(nums.length == 1) return 0;

  for(const x of nums) {
      if(x > maxNum) {
          maxNum = x;
      } else if(x < maxNum && x > secondNum){
         secondNum = x;
      }
  }

  if(maxNum >= secondNum * 2) {
      return 1;
  } else {
      return -1;
  }
};
console.log(dominantIndex([2,4]));

/**
 * author: leewei
 * data: 2022.01.21
 * title: 152. 乘积最大子数组 / https://leetcode-cn.com/problems/maximum-product-subarray/
 * count: 1
 * status: non
 * origin: 字节校园每日一题
 */

var maxProduct = function (nums) {
  let maxResult = 1;
  let minResult = 1;
  let res = -Infinity;
  const len = nums.length;
  for (let i = 0; i < len; i++) {    
    let maxTem = maxResult;
    let minTem = minResult;
    maxResult = Math.max(nums[i] * maxTem, minTem * nums[i], nums[i]);
    minResult = Math.min(nums[i] * maxTem, nums[i] * minTem, nums[i]);
    res = Math.max(maxResult, res);
  }

  return res;
};

console.log(maxProduct([-4, -3, -2]));

/**
 * author: leewei
 * data: 2022.01.12
 * title: 334. 递增的三元子序列 / https://leetcode-cn.com/problems/increasing-triplet-subsequence/
 */

var increasingTriplet = function (nums) {
  let first = Number.MAX_VALUE;
  let second = Number.MAX_VALUE;

  for (const x of nums) {
    if (x <= first) {
      first = x;
    } else if (x <= second) {
      second = x;
    } else {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet((nums = [1,1,1,1,1])));

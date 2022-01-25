/**
 * author leewei
 * date 2021-11-28
 * task 找到 K 个最接近的元素 / https://leetcode-cn.com/problems/find-k-closest-elements/
 */

var findClosestElements = function (arr, k, x) {
  let start = 0;
  let end = arr.length - 1;
  let removeCount = arr.length - k;
  while (removeCount > 0) {
    if (Math.abs(arr[start] - x) <= Math.abs(arr[end] - x)) {
      end--;
    } else {
      start++;
    }

    removeCount--;
  }
  
  return arr.slice(start, end + 1);
};

findClosestElements((arr = [1, 2, 3, 4, 5]), (k = 4), (x = -1));

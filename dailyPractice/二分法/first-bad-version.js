/**
 * author leewei
 * date 2021-11-26
 * task 第一个错误版本 https://leetcode-cn.com/problems/first-bad-version/
 */

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0;
    let end = n;
    let mid = 0;

    while (start < end) {
      mid = start + ((end - start) >> 1);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};



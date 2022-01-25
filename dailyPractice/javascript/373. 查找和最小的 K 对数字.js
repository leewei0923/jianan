/**
 * author: leewei
 * data: 2022.01.14
 * title: 373. 查找和最小的 K 对数字 / https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/
 * count: 1
 * status: non
 */

var kSmallestPairs = function (nums1, nums2, k) {
  const m = nums1.length;
  const n = nums2.length;
  const dp = new Array(Math.min(m, k)).fill(0);
  const result = [];
  while (result.length < k) {
    let minIndex = -1;
    let minValue = Number.MAX_VALUE;

    for (let i = 0; i < dp.length; i++) {
      if (dp[dp.length - 1] === n) return result;

      if (dp[i] === n) continue;

      let cur = nums1[i] + nums2[dp[i]];

      if (cur < minValue) {
        minIndex = i;
        minValue = cur;
      }

      if (dp[i] === 0) break;
    }

    result.push([nums1[minIndex], nums2[dp[minIndex]]]);
    dp[minIndex]++;
  }

  return result;
};

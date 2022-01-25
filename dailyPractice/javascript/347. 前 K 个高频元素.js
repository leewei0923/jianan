/**
 * author: leewei
 * data: 2022.01.10
 * title: 347. 前 K 个高频元素 / https://leetcode-cn.com/problems/top-k-frequent-elements/
 */

var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const x of nums) {
    if (map.has(x)) {
      let curNum = map.get(x);
      map.set(x, ++curNum);
    } else {
      map.set(x, 1);
    }
  }
  const resultBox = [];
  while (k > 0) {
    let maxNum = 0; 
    let resKey = '';
    for (const [k, v] of map) {
        if(v > maxNum) {
            maxNum = v;
            resKey = k;
        }
    }
    map.delete(resKey);
    resultBox.push(resKey);
    k--;
  }

  console.log(resultBox);
};

// topKFrequent((nums = [1, 1, 1, 2, 2, 3]), (k = 2));
topKFrequent([3, 0, 1, 0], 1);

/**
 * author: leewei
 * data: 2022.01.16
 * title: 面试题 17.14. 最小K个数 / https://leetcode-cn.com/problems/smallest-k-lcci/
 * count: 1
 * status: non
 * tag: 数组,分治,排序
 */
var smallestK = function (arr, k) {
  arr = quickSort(arr);

  return arr.slice(0, k);
};

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivotIdx = Math.floor(arr.length / 2);

  let pivot = arr.splice(pivotIdx, 1);

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (pivot < arr[i]) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

console.log(smallestK((arr = [1, 3, 5, 7, 2, 4, 6, 8]), (k = 4)));

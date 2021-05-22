/*
author: leewei/李伟
theme: 寻找两个正序数组的中位数 / median of two sorted arrays
date: 2021.05.21
*/


/*
1. 合并两个数组  concat
2. 对合并后的数组进行排序  sort
  - 因为直接使用,对后面的数可能有些影响,采用调用函数来判断
3. 进行判断,判断奇偶数
4. 通过奇偶数,进行计算取一半

*/

var findMedianSortedArrays = function (nums1, nums2) {
    let numberBox = nums1.concat(nums2)
    numberBox.sort(compare)
    if (numberBox.length % 2 == 0) {
        numIndex = numberBox.length / 2
        return (numberBox[numIndex] + numberBox[numIndex - 1]) / 2
    } else {
        numIndex = numberBox.length / 2
        return numberBox[parseInt(numIndex)]
    }

    function compare(item1, item2) {
        if (item1 > item2) {
            return 1
        } else if (item1 < item2) {
            return -1
        } else {
            return 0
        }

    }

};

// 示例
x1 = [1, 3]
x2 = [2]

findMedianSortedArrays(x1, x2)
console.log(findMedianSortedArrays(x1, x2))

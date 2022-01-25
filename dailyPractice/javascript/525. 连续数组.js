/**
 * author: leewei
 * data: 2022.01.23
 * title: 525. 连续数组 / https://leetcode-cn.com/problems/contiguous-array/
 * count: 1
 * status: 
 */

var findMaxLength = function (nums) {
    const len = nums.length;
    const map = new Map();
    map.set(0, -1);
    let pre = 0;
    let res = 0;

    for(let i = 0; i < len; i++) {
        pre += nums[i] == 0 ? -1 : 1;

        if(map.has(pre)) {
            res = Math.max(res, i - map.get(pre));
        } else {
            map.set(pre, i);
        }
        
    }

    return res;
};

console.log(findMaxLength([0, 1]));

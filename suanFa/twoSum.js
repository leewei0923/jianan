/*
author: leewei/李伟
theme: 两数之和 / twoSum
date: 2021.05.18
*/


// 暴力解法

var twoSum1 = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

/*
第一种方法采用暴力解法，穷举的方法。
当i为 第一个nums中第一个数，然后对nums遍历，j比i多一个，进行遍历
找到与目标值相等的时候，再输出
*/

// 高级做法
/*
1. 创建一个map
2. for循环遍历nums数组
3. 用target减nums[i]
来计算那个数能跟当前的数字相加得到target
4.检查map里有没有这个数
如果有则返回结果,如果没有吧nums[i]当做key,i当做value放入map中
 */

let  twosum2 = function(nums , target){
    let map = new map();
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if( map.has(complement)){
            return [map.get(complement),i];
        }else{
            map.set(nums[i],i)
        }
    }
}
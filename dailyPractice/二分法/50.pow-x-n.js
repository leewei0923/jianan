/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * author leewei
 * date 2021-11-29
 * task pow函数
 */
// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // 处理 n 为负数 变成小数
    if(n < 0) {
        x = 1 / x;
        n = -n;
    }

    // n 为0 返回1
    if(n === 0) {
        return 1;
    }

    let res = 1;
    // 指数幂相加
    while(n > 1) {
        //  保存 n为奇数的情况 
        if(n % 2 != 0) {
            n--;
            res *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
        // n = n >> 1; //
    }
    return res * x;
};
// @lc code=end
console.log(myPow(2.0 ,2));

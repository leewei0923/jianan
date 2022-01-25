/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/** 
 * author leewei
 * date 2021-11-29
 * task 有效的完全平方数
*/

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 0;
    let end = num;

    while(start <= end) {
        
        let mid = start + ((end - start) >> 1);

        if(mid * mid === num) {
            return true;
        } else if(mid * mid < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
};
// @lc code=end

console.log(isPerfectSquare(64));
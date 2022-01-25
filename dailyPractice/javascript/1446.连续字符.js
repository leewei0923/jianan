/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {

    let start = 0;
    let end = 1;
    let res = 1;

    if(s.length == 0) return 0;
    
    while(end < s.length) {
        if(s[start] === s[end]) {
            res = Math.max(res, end - start + 1);
            end++;
        } else {
            start = end - 1;
            start++;
            end++;
        }
    }

    return res;
};
// @lc code=end
console.log(maxPower((s = "ccbccbb")));



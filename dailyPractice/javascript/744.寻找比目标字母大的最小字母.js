/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let start = 0;
    let end = letters.length;
    while(start < end) {
        let mid = start + ((end - start) >> 1);

        if(letters[mid].charCodeAt() <= target.charCodeAt() ) {
            start = mid + 1;
        } else {
            end = mid ;
        }
    }

    return letters[start % letters.length];
};
// @lc code=end

console.log(nextGreatestLetter(letters = ["c", "f", "j"], target = "j"))
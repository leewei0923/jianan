/**
 * author: leewei
 * data: 2022.01.13
 * title: 678. 有效的括号字符串 / https://leetcode-cn.com/problems/valid-parenthesis-string/
 * count: 1
 */

var checkValidString = function (s) {
    let minScore = 0, maxScore = 0;

    for(const x of s) {
        if(x == '(') {
            minScore++;
            maxScore++;
        } else if(x == ')') {
            minScore = Math.max(minScore - 1, 0);
            maxScore--;
            if(maxScore < 0) return false;
        } else {
            minScore = Math.max(minScore - 1, 0);
            maxScore++
        }
    }

    return minScore == 0;
};

console.log(checkValidString('()'))
/**
 * author leewei
 * date 2021-11-26
 * task 有效的括号 https://leetcode-cn.com/problems/valid-parentheses/
 */

var isValid = function (s) {

    if(s.length % 2 != 0 ) return false;

    const map = new Map([[')','('], [']', '['], ['}', '{']]);
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {

            if(!stack.length || stack[stack.length - 1] != map.get(s[i])) return false;

            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    
    return !stack.length;

};

console.log(isValid("([)]"));
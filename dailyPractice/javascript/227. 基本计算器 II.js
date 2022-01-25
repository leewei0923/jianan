/**
 * author: leewei
 * data: 2022.01.20
 * title: 227. 基本计算器 II / https://leetcode-cn.com/problems/basic-calculator-ii/
 * count: 1
 * status: 
 */

var calculate = function (s) {
    const stack = [];
    const len = s.length;
    let n = 0;
    let sign = '+';

    for(let i = 0; i <= len; i++) {
        if(s[i] === ' ') continue;

        if(s[i] >= '0') {
            n = n * 10 + parseInt(s[i]);
            continue;
        }

        switch(sign) {
            case '+': stack.push(n); break
            case '-': stack.push(-n); break
            case '/': stack.push(~~(stack.pop() / n)); break
            case '*': stack.push(stack.pop() * n ); break
            
        }

        sign = s[i];
        n = 0;
    }

    return stack.reduce((i, v) => i + v, 0);
};

console.log(calculate("3+2*2"));
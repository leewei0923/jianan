/**
 * author: leewei
 * data: 2022.01.20
 * title: 224. 基本计算器 / https://leetcode-cn.com/problems/basic-calculator/
 * count: 1
 * status:
 */

var calculate = function (s) {
  s = s.replace(/\s/g, "");
  const stack = [];
  const len = s.length;
  let n = 0;
  let sign = "+";
  for (let i = 0; i <= len; i++) {
    let count = 0;
    let flag = 1;
    if (s[i] == " ") continue;
    while (s[i] == "(") {
      if (s[i - 1] && s[i - 1] == "-") {
        flag = -1;
      }
      count++;
      i++;
      if (s[i] == ")") break;
    }

    if (s[i] == ")") {
      let res = calculate(s.slice(i + 1, i + count + 1));
      stack.push(res * flag);
    }

    if (s[i] >= 0) {
      n = n * 10 + parseInt(s[i]);
      continue;
    }

    switch (sign) {
      case "+":
        stack.push(n);
        break;
      case "-":
        stack.push(-n);
        break;
      default:
        stack.push(n);
        break;
    }
    sign = s[i];
    n = 0;
  }
    return stack.reduce((i, v) => i + v, 0);
};

// console.log(calculate("1+1"));

console.log(calculate("- (3 + (4 + 5))"));

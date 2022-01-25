/**
 * author: leewei
 * data: 2022.01.15
 * title: 1716. 计算力扣银行的钱 / https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank/
 * * count: 1
 * status: non
 */

var totalMoney = function (n) {
     var d = Math.floor(n / 7), l = n % 7;  // 周期和剩余
    return d * (7 * d + 49) / 2 + l * (d * 2 + 1 + l) / 2;
};


console.log(totalMoney(8));
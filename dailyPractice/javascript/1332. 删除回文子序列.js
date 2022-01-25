/**
 * author: leewei
 * data: 2022.01.22
 * title: 1332. 删除回文子序列 / https://leetcode-cn.com/problems/remove-palindromic-subsequences/
 * count: 1
 * status:
 */

var removePalindromeSub = function (s) {
    const len = s.length;
    let i = 0;
    let j = len - 1;

    while(i < j) {
        if(s.charAt(i) !== s.charAt(j)) {
            return 2;
        }

        i++;
        j--;
    }
    return 1;
};

console.log(removePalindromeSub('ababba'));
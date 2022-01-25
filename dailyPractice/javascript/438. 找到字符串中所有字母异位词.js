/**
 * author leewei
 * date 2021-1128
 * task 438. 找到字符串中所有字母异位词 https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 */
// 滑动窗口 + 双指针
var findAnagrams = function (s, p) {
    let m = s.length;
    let n = p.length;
    const pList = new Array(26).fill(0);
    let res = [];

    for(let x of p) {
        let pCode = x.charCodeAt() - 'a'.charCodeAt();
        pList[pCode]++;
    }

    let start = 0; 
    let end = n;
    while(end <= m) {
        let str = s.slice(start, end);
        if(pList.join('') === joinString(str)) {
            res.push(start);
        }

        start++;
        end++;
    }
    return res;
};
// 将s中字符串用
function joinString(s) {
    const sList = new Array(26).fill(0);
    for(let x of s) {
        let sCode = x.charCodeAt() - "a".charCodeAt();
        sList[sCode]++
    }

    return sList.join('');
}


// findAnagrams((s = "cbaebabacd"), (p = "abc"));
findAnagrams((s = "abab"), (p = "ab"));

/**
 * 1. 获取每一个字母相对于a 的位置 储存在26字母表中
 * 2. 因为是无关顺序 只看字母个数, 用数组保存字母的个数
 */
/*
author: leewei/李伟
theme: 无重复字符的最长子串 / longest substring without repeating character
date: 2021.05.18
*/

/*
1. 创建一个set
2. 两个指针
  - 第一个指针指向字符串的开头
  - 第二个随着for循环循环遍历数组
3. 如果set里没有s[i],说明目前为止还没有重复的字符
   把s[i]添加到set里,然后更新最大不重复字符的数量
4. 如果set里有s[i],则从set里开始删除s[i]并且递增,
   再检查set里是否有s[i]
5. 重复步骤3,4,直到遍历完数组
   

*/


var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let i = 0, j = 0, maxLength = 0;
    if (s.length === 0) {
        return 0;
    }

    for (i; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            maxLength = Math.max(maxLength, set.size);
        } else {
            while (set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
            set.add(s[i])
        }
    }
    return maxLength
};
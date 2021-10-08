# 力扣日记 / LeetCode Diary

> 前言

首先祝福伟大的祖国生日快乐，祝繁荣昌盛！10.01日伟大的日子，我决定开始自己的力扣日记，记录刷题的日常，我会尽量的坚持下去。



### 10.01

### [1436. 旅行终点站](https://leetcode-cn.com/problems/destination-city/)

   给你一份旅游线路图，该线路图中的旅行线路用数组 `paths` 表示，其中 `paths[i] = [cityAi, cityBi]` 表示该线路将会从 `cityAi` 直接前往 `cityBi` 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市*。*

   题目数据保证线路图会形成一条不存在循环的线路，因此恰有一个旅行终点站。

​    

   **示例 1：**

   ```
   输入：paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
   输出："Sao Paulo" 
   解释：从 "London" 出发，最后抵达终点站 "Sao Paulo" 。本次旅行的路线是 "London" -> "New York" -> "Lima" -> "Sao Paulo" 。
   ```

> 哈希表

```javascript
var destCity = function (paths) {
    const map = new Map();

    for (let i = 0; i < paths.length; i++) {
        map.set(paths[i][0], paths[i][1]);
    }

    for (let j = 0; j < paths.length; j++) {
        if (!map.has(paths[j][1])) {
            return paths[j][1];
        }
    }
};

/*
利用哈希表的特性，答案其实找到的是一个值没有一个相对应的键。
1. 创建Map
2. 将每个二维数组遍历，按照相对应的键值对，添加到Map中
3. 再对

*/
```

### [50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)

   实现 [pow(*x*, *n*)](https://www.cplusplus.com/reference/valarray/pow/) ，即计算 x 的 n 次幂函数（即，xn）。

​    

   **示例 1：**

   ```
   输入：x = 2.00000, n = 10
   输出：1024.00000
   ```

```javascript
var myPow = function (x, n) {
    //用于对倒数的处理
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    return quickMut(x, n);
};
function quickMut(x, n) {
    if (n === 0) {
        return 1;
    }
    // n / 2 记得要向下取整
    let y = quickMut(x, ~~(n / 2));
    return n % 2 === 0 ? y * y : y * y * x;
};
```

## 10.02

###  [405. 数字转换为十六进制数](https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/)

   给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。

   注意:

   十六进制中所有字母(a-f)都必须是小写。
   十六进制字符串中不能包含多余的前导零。如果要转化的数为0，那么以单个字符'0'来表示；对于其他情况，十六进制字符串中的第一个字符将不会是0字符。 
   给定的数确保在32位有符号整数范围内。
   不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。

   ```
   示例 1：
   
   输入:
   26
   
   输出:
   "1a"
   ```

   ```
   示例 2：
   
   输入:
   -1
   
   输出:
   "ffffffff"
   ```

```javascript
var toHex = function (num) {
    const List = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let res = [];
    if (num < 0) {
        num += 2 ** 32;
    }
    if (num == 0) return '0';
    while (num !== 0) {
        res.push(List[num % 16]);
        num = ~~(num / 16);
    }
    return res.reverse().join('');
};
```



### 字符串中的第一个唯一字符

给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

 ```
 示例：
 
 s = "leetcode"
 返回 0
 
 s = "loveleetcode"
 返回 2
 ```

```javascript
// 哈希表

var firstUniqChar = function (s) {
    if (s.length == 0) {
        return -1;
    }
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], -1);
        } else {
            map.set(s[i], i);
        }
    }
    for (let v of map.values()) {
        if (v !== -1) {
            return v;
        }
    }
    return -1;
};
```

```
// 思路
关键词: 第一个 不重复 存在返回索引 不存在返回 -1
1. 利用哈希表(唯一的key值)
2. 访问字符串的索引值，将它们存入哈希表，出现重复就更新值为-1 否则创建新值
3. 由于返回第一个不重复索引值，再对哈希表的值进行遍历，返回遇到一个不为-1的值就返回

```

## 10.03

### [166. 分数到小数](https://leetcode-cn.com/problems/fraction-to-recurring-decimal/)

   难度中等301

   给定两个整数，分别表示分数的分子 `numerator` 和分母 `denominator`，以 **字符串形式返回小数** 。

   如果小数部分为循环小数，则将循环的部分括在括号内。

   如果存在多个答案，只需返回 **任意一个** 。

   对于所有给定的输入，**保证** 答案字符串的长度小于 `104` 。

​    

   **示例 1：**

   ```
   输入：numerator = 1, denominator = 2
   输出："0.5"
   ```

```javascript
var fractionToDecimal = function (numerator, denominator) {
    let flag = 1;

  if((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0)){
    flag = -1;
  }
        
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

  let remainder = numerator % denominator; //余数
  let quotient = Math.floor(numerator / denominator); //商

  if(remainder == 0){
    return "" + quotient * flag;
  }
 
// 处理带小数的
  const res = [];
  const map = new Map();
  res.push(quotient.toString());
  res.push('.');

  for(let i = 0; i <10000; i++){
    numerator = remainder * 10;
    quotient = Math.floor(numerator / denominator);
    remainder = numerator % denominator;
    if(map.has(numerator)){
      res.splice(map.get(numerator),0,'(');
      res.push(")");
      break;
    }
    
    res.push(quotient.toString());
    map.set(numerator, i + 2);
    if(remainder == 0) 
      break;
  
  }
  if(flag == -1)
        return "-" + res.join("");
    return res.join("");   
};
```

解法:

1. 分为两步 一为处理整数部分 二为处理小数部分(出现循环小数等)
2. 先处理正负数问题(math.abs())

3. 再进行整数运算 求商和 取模长 求商的时候不要使用~~,可能会出现问题
4. 处理小数的时候就和纸上列竖式差不多的步骤



### [107. 二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

   难度中等492

   给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

   例如：
   给定二叉树 `[3,9,20,null,null,15,7]`,

   ```
       3
      / \
     9  20
       /  \
      15   7
   ```

   返回其自底向上的层序遍历为：

   ```
   [
     [15,7],
     [9,20],
     [3]
   ]
   ```

   ```javascript
   var levelOrderBottom = function(root) {
       const res = [];
       function loop(node, h) {
           if (!node) return;
           if (!res[h]) res[h] = []
           res[h].push(node.val);
   
           loop(node.left,  h + 1);
           loop(node.right, h + 1);
       }
   
       loop(root, 0);
       return res.reverse();
   };
   ```

## 10.04

###  [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)


      给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。
      
      ```
      输入: s = "pwwkew"
      输出: 3
      解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
           请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
      ```
      
      ```javascript
      var lengthOfLongestSubstring = function(s) {
        const map = new Map();
        let start = 0, res = 0;
        for(let i = 0; i < s.length; i++){
          if(map.has(s[i])){
            start = Math.max(map.get(s[i]),start);
          }
          res = Math.max(res,i - start + 1);
          map.set(s[i],i+1);
        }
        return res;
      };
      ```
      
      > 思路
      
      ```
      1. 对于做重复的题首先想到的是哈希表
      2. 定义开始序号start 和 结果变量res
      3. 再对该字符串进行遍历, 在哈希表表中出现过, 对start进行更新(变为最大序号)
      4. res就用当前遍历下标 i - start + 1 (为什么 + 1 ? )
      
      ```

### [482. 密钥格式化](https://leetcode-cn.com/problems/license-key-formatting/)

难度简单96

有一个密钥字符串 S ，只包含字母，数字以及 '-'（破折号）。其中， N 个 '-' 将字符串分成了 N+1 组。

给你一个数字 K，请你重新格式化字符串，使每个分组恰好包含 K 个字符。特别地，第一个分组包含的字符个数必须小于等于 K，但至少要包含 1 个字符。两个分组之间需要用 '-'（破折号）隔开，并且将所有的小写字母转换为大写字母。

给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。

 

**示例 1：**

```
输入：S = "5F3Z-2e-9-w", K = 4
输出："5F3Z-2E9W"
解释：字符串 S 被分成了两个部分，每部分 4 个字符；
     注意，两个额外的破折号需要删掉。
```

我的错误思考

```javascript
var licenseKeyFormatting = function(s, k) {
  if(s.length < k) return s.toUpperCase();
  
  let list = s.split("-").join(''); // 去掉"-"生成新数组
  list = list.split('');
  let remainder = list.length % k; //余数
  if(remainder === 0){
    for(let i = 1; i < Math.floor(list.length / k); i++){
      list.splice(k * i , 0 , '-');
    } 
  }else{
    list.splice(remainder , 0 , '-');

     for(let i = 2; i < Math.floor(list.length / k); i++){
      list.splice(k * i , 0 , '-');
    } 
  }

  return list.join('').toUpperCase();
};
```

```
以上代码解决一般是没什么问题，但是可能会出现死循环问题，运行到崩溃，但是我的思路是正确的
```



## 10.05

### [284. 顶端迭代器](https://leetcode-cn.com/problems/peeking-iterator/)  (再回头)

难度中等129

请你设计一个迭代器，除了支持 `hasNext` 和 `next` 操作外，还支持 `peek` 操作。

实现 `PeekingIterator` 类：

- `PeekingIterator(int[] nums)` 使用指定整数数组 `nums` 初始化迭代器。
- `int next()` 返回数组中的下一个元素，并将指针移动到下个元素处。
- `bool hasNext()` 如果数组中存在下一个元素，返回 `true` ；否则，返回 `false` 。
- `int peek()` 返回数组中的下一个元素，但 **不** 移动指针。

 

**示例：**

```
输入：
["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
[[[1, 2, 3]], [], [], [], [], []]
输出：
[null, 1, 2, 2, 3, false]

解释：
PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
peekingIterator.next();    // 返回 1 ，指针移动到下一个元素 [1,2,3]
peekingIterator.peek();    // 返回 2 ，指针未发生移动 [1,2,3]
peekingIterator.next();    // 返回 2 ，指针移动到下一个元素 [1,2,3]
peekingIterator.next();    // 返回 3 ，指针移动到下一个元素 [1,2,3]
peekingIterator.hasNext(); // 返回 False
```

```javascript
 let iter , element;
var PeekingIterator = function(iterator) {
    iter = iterator;
    element = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
       
       element == null ? element = iter.next() : '';
    return element;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if(element != null){
        let newVal = element;
        element = null;
        return newVal;
    }
    return iter.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return element != null || iter.hasNext(); 
};
```

## 10.06

### [414. 第三大的数](https://leetcode-cn.com/problems/third-maximum-number/)



给你一个非空数组，返回此数组中 **第三大的数** 。如果不存在，则返回数组中最大的数。

 

**示例 1：**

```
输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。
```



```js
var thirdMax = function (nums) {
    nums.sort((a, b) => {
        return b - a
    }
    );
    let res = [];
    nums.filter((item, index, array) => {
        if (array.indexOf(item) === index) {
            res.push(item);
        }
    }
    )
    if (res.length < 3) {
        return res[0];
    } else {
        return res[2]
    }
};
```

```
思路:排序
	1. 首先对传入的数组进行排序
	2. 再利用filter函数去重(这个效率低)
	2. 判断去重后的数组，小于3个返回下标为0 ，否则返回下标为2的数组
```

----

> 回溯算法

### [40. 组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)



给定一个数组 `candidates` 和一个目标数 `target` ，找出 `candidates` 中所有可以使数字和为 `target` 的组合。

`candidates` 中的每个数字在每个组合中只能使用一次。

**注意：**解集不能包含重复的组合。 

 

**示例 1:**

```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```



## 10.07



### [434. 字符串中的单词数](https://leetcode-cn.com/problems/number-of-segments-in-a-string/)

> #### 原地法

统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

**示例:**

```
输入: "Hello, my name is John"
输出: 5
解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
```

```js
var countSegments = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if ((i == 0 || s[i - 1] == ' ') && s[i] !== ' ') {
            count++;
        }
    }

    return count
};
```

思路:

```
1. 这题存在一些坑
```



## 10.08

> 周五

#### [260. 只出现一次的数字 III](https://leetcode-cn.com/problems/single-number-iii/)



给定一个整数数组 `nums`，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 **任意顺序** 返回答案。



```javascript
var singleNumber = function(nums) {
  const map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let val = map.get(nums[i]);
      map.set(nums[i], val + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let[key,value] of map.entries()) {
    if (value == 1) {
      res.push(key);
    }
  }

  return res;
};
```

```

看到重复的题,我一般选择用哈希
1. 先用哈希筛选一遍, 出现重复的给value + 1 ,否则为 1 
2. 再遍历哈希表, value 不等于 1 的数添加到res中
3. return res
```


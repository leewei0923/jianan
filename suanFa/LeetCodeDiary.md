# 力扣日记 / LeetCode Diary

> 前言

首先祝福伟大的祖国生日快乐，祝繁荣昌盛！10.01日伟大的日子，我决定开始自己的力扣日记，记录刷题的日常，我会尽量的坚持下去。



## 10.01

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

### [260. 只出现一次的数字 III](https://leetcode-cn.com/problems/single-number-iii/)



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

### [187. 重复的DNA序列](https://leetcode-cn.com/problems/repeated-dna-sequences/)

难度中等283

所有 DNA 都由一系列缩写为 `'A'`，`'C'`，`'G'` 和 `'T'` 的核苷酸组成，例如：`"ACGAATTCCG"`。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 `s` 中出现次数超过一次。

 

**示例 1：**

```
输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC","CCCCCAAAAA"]
```

```js
var findRepeatedDnaSequences = function (s) {
     let start = 0 , end = 10;
    if(s.length < 10) return [];
    let res =[];
    const map = new Map();
    while(end <= s.length){
      let str = s.slice(start,end);
      if(map.has(str)){
        let val = map.get(str);
        map.set(str,val + 1)
      }else{
          map.set(str,1)
      }
      start++;
      end++;
    }

    for(let [key , value] of map){
        if(value != 1){
            res.push(key)
        }
    }
    return res;
};
```

```
这题 我觉得和上面的那题, 想法类似, 遇到重复问题 , 可以使用哈希表
```



## 10.09



### [829. 连续整数求和](https://leetcode-cn.com/problems/consecutive-numbers-sum/)

难度困难117

给定一个正整数 `N`，试求有多少组连续正整数满足所有数字之和为 `N`?

**示**例 1:

```
输入: 5
输出: 2
解释: 5 = 5 = 2 + 3，共有两组连续整数([5],[2,3])求和后为 5。
```

```javascript
var consecutiveNumbersSum = function (S) {
    let res = 0;

    for (let n = 1; n <= S; n++) {
        let a = (2 * S + n - n ** 2) / (2 * n);
        if (a < 0) return res;
        if (a % 1 == 0 && a > 0) {
            res = res + 1;
        }
    }

    return res;
};
```

```
数学等差数列的知识
1. 定义一个计数的 res
2. 对 i 进行遍历
3. 光进行枚举的话,时间一定会超
```



### [352. 将数据流变为多个不相交区间](https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/)

难度困难139

 给你一个由非负整数 `a1, a2, ..., an` 组成的数据流输入，请你将到目前为止看到的数字总结为不相交的区间列表。

实现 `SummaryRanges` 类：

- `SummaryRanges()` 使用一个空数据流初始化对象。
- `void addNum(int val)` 向数据流中加入整数 `val` 。
- `int[][] getIntervals()` 以不相交区间 `[starti, endi]` 的列表形式返回对数据流中整数的总结。

 ```javascript
 var SummaryRanges = function() {
     this.nums = []; // nums 进行初始化
 };
 
 /** 
  * @param {number} val
  * @return {void}
  */
 SummaryRanges.prototype.addNum = function(val) {
     // nums中存在 val 的值 就直接返回 
     if(this.nums.includes(val)) return ; 
     // 不存在就 推进 ,然后进行排序
     this.nums.push(val);
     this.nums.sort((a,b) => {return a - b });
 
 };
 
 /**
  * @return {number[][]}
  */
 SummaryRanges.prototype.getIntervals = function() {
     // 定义一个输出的res
     const res = [];
     // len 保存 nums 长度
     const len = this.nums.length;
     if(!len) return res;
 
     for(let i = 0; i < len; i++){
         const curNum = this.nums[i];
 
         if(!res.length){
             res.push([curNum,curNum]);
         } else {
             const lastSideNum = res[res.length - 1];
             lastSideNum[1] + 1 === curNum ? lastSideNum[1]++ : res.push([curNum,curNum])
         }
     }
 
     return res;
 };
 
 /**
  * Your SummaryRanges object will be instantiated and called as such:
  * var obj = new SummaryRanges()
  * obj.addNum(val)
  * var param_2 = obj.getIntervals()
  */
 ```

```
没怎么弄懂,看题解写的,
```



## 10.10

### [268. 丢失的数字](https://leetcode-cn.com/problems/missing-number/)

难度简单450

给定一个包含 `[0, n]` 中 `n` 个数的数组 `nums` ，找出 `[0, n]` 这个范围内没有出现在数组中的那个数。



**示例 1：**

```
输入：nums = [3,0,1]
输出：2
解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
```

> 方法一

```js
var missingNumber = function(nums) {
    nums.sort((a,b)=>{return a-b})

    for(let i = 0; i < nums.length; i++){
      if(nums[i] != i) {
        return nums[i] - 1;
      }
    }

    return nums[nums.length-1] + 1;

};
```

```
1. 先进行排序,
2. 根据数组的长度进行遍历
3. 不相同的数直接return 因为后一位的数占了位置,后一位的数要 -1 return
4. 还有就是结尾的数要 +1 之后可以return
```

> 方法二



```js
var missingNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(!nums.includes(i)){
            return i;
        }
    }
    return nums.length;
};
```




### [441. 排列硬币](https://leetcode-cn.com/problems/arranging-coins/)

难度简单160

你总共有 `n` 枚硬币，并计划将它们按阶梯状排列。对于一个由 `k` 行组成的阶梯，其第 `i` 行必须正好有 `i` 枚硬币。阶梯的最后一行 **可能** 是不完整的。

给你一个数字 `n` ，计算并返回可形成 **完整阶梯行** 的总行数。

 ```js
 //JavaScript
 var arrangeCoins = function (n) {
     let res = 0;
     while (res < n) {
         n = n - 1 - res;
         res++;
     }
     return res;
 };
 ```



```	c
//C
int arrangeCoins(int n){
    int res = 0;

		while (res < n) {
			n = n - 1 - res;
			res++;
		}
		return res;
}
```



```
数学方式  等差数列
1. 下层比上层多一个
2. res 记录层级
```

## 10.11

### 273. 整数转换英文表示(再回头)
将非负整数 num 转换为其对应的英文表示。


```
示例 1：

输入：num = 123
输出："One Hundred Twenty Three"
```



```js
var numberToWords = function (num) {
    const singles = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];

    const handle = (tem, num) => {
        if (num == 0) {
            return;
        } else if (num < 10) {
            return tem.push(singles[num % 10] + ' ');
        } else if (num < 20) {
            return tem.push(teens[num - 10] + ' ');
        } else if (num < 100) {
            tem.push(tens[Math.floor(num / 10)] + " ");
            handle(tem, num % 10);
        } else {

            tem.push(singles[Math.floor(num / 100)] + " Hundred ");
            handle(tem, num % 100);
        }
    }
    if (num == 0)
        return 'Zero';
    const res = [];
    for (let i = 3, unit = 1000000000; i >= 0; i--,
        unit = Math.floor(unit / 1000)) {
        const curNum = Math.floor(num / unit);
        if (curNum !== 0) {
            num -= curNum * unit;
            const tem = [];
            handle(tem, curNum);
            tem.push(thousands[i] + " ");
            res.push(tem.join(''));
        }
    }
    return res.join('').trim();
};
```



### [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)

难度中等1141

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？



```js
var uniquePaths = function (m, n) {
    // 创建 "棋盘"
  const board= Array(m).fill().map(item => Array(n))    
    for (let i = 0; i < m; i++) {
        board[i][0] = 1;
    }
    
    for (let i = 0; i < n; i++) {
        board[0][i] = 1;
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            board[i][j] = board[i - 1][j] + board[i][j - 1];
        }
    }


    return board[m - 1][n - 1];
};
```



## 10.02

### [29. 两数相除](https://leetcode-cn.com/problems/divide-two-integers/)

难度中等725

给定两个整数，被除数 `dividend` 和除数 `divisor`。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 `dividend` 除以除数 `divisor` 得到的商。

整数除法的结果应当截去（`truncate`）其小数部分，例如：`truncate(8.345) = 8` 以及 `truncate(-2.7335) = -2`

 

> 位运算

```js
var divide = function (dividend, divisor) {
    let flag = 1;

    const [MIN, MAX] = [-(2 ** 31), 2 ** 31 - 1];
    if (dividend === MIN && divisor === -1)
        return MAX;
    if (dividend === MIN && divisor === 1)
        return MIN;

    if (dividend < 0 && divisor < 0) {
        dividend = -dividend;
        divisor = -divisor;
    } else if (divisor < 0) {
        divisor = -divisor;
        flag = -1;
    } else if (dividend < 0) {
        dividend = -dividend;
        flag = -1;
    }

    let res = 0;
    for (let i = 31; i >= 0; i--) {
        // 找出满足条件的最大的倍数
        if (dividend >>> i >= divisor) {
            // 累加上这个倍数
            res += 1 << i;
            // 被除数减去这个倍数*b
            dividend -= divisor << i;
        }
    }

    if (res == 0)
        return res;
    return res * flag;
};
```

### [43. 字符串相乘](https://leetcode-cn.com/problems/multiply-strings/)

难度中等737

给定两个以字符串形式表示的非负整数 `num1` 和 `num2`，返回 `num1` 和 `num2` 的乘积，它们的乘积也表示为字符串形式。

**示例 1:**

```
输入: num1 = "2", num2 = "3"
输出: "6"
```

```js
var multiply = function (num1, num2) {
   if (num1 === '0' || num2 === '0') {
        return '0';
    }
    var l1 = num1.length, l2 = num2.length, p = new Array(l1 + l2).fill(0)
    for (var i = l1; i--;) {
        for (var j = l2; j--;) {
            var tmp = num1[i] * num2[j] + p[i + j + 1]
            p[i + j + 1] = tmp % 10;
            p[i + j] += 0 | tmp / 10;
        } 
    }
    while(p[0] === 0) {
        p.shift()
    }
    return p.join('');
};
```



## 10.13

### [412. Fizz Buzz](https://leetcode-cn.com/problems/fizz-buzz/)

难度简单137

给你一个整数 `n` ，找出从 `1` 到 `n` 各个整数的 Fizz Buzz 表示，并用字符串数组 `answer`（**下标从 1 开始**）返回结果，其中：

- `answer[i] == "FizzBuzz"` 如果 `i` 同时是 `3` 和 `5` 的倍数。
- `answer[i] == "Fizz"` 如果 `i` 是 `3` 的倍数。
- `answer[i] == "Buzz"` 如果 `i` 是 `5` 的倍数。
- `answer[i] == i` 如果上述条件全不满足。

 

**示例 1：**

```
输入：n = 3
输出：["1","2","Fizz"]
```



```js
var fizzBuzz = function (n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz')
        } else if (i % 3 === 0) {
            res.push('Fizz')
        } else if (i % 5 === 0) {
            res.push('Buzz')
        } else {
            res.push(i.toString())
        }
    }
    return res;
};
```



### [377. 组合总和 Ⅳ](https://leetcode-cn.com/problems/combination-sum-iv/)

难度中等501

给你一个由 **不同** 整数组成的数组 `nums` ，和一个目标整数 `target` 。请你从 `nums` 中找出并返回总和为 `target` 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。



> 动态规划

```js
var combinationSum4 = function (nums, target) {
    let DP = new Array(target + 1).fill(0);
    DP[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let x of nums) {
            if (x <= i) {
                DP[i] += DP[i - x];
            }
        }
    }
    return DP[target];
};
```



## 10.14

### [剑指 Offer II 069. 山峰数组的顶部](https://leetcode-cn.com/problems/B1IidL/)

难度简单24

符合下列属性的数组 `arr` 称为 **山峰数组**（**山脉数组）** ：

- `arr.length >= 3`

- 存在

  ```
  i(0 < i < arr.length - 1
  ```

  ）使得：

  - `arr[0] < arr[1] < ... arr[i-1] < arr[i]`
  - `arr[i] > arr[i+1] > ... > arr[arr.length - 1]`

给定由整数组成的山峰数组 `arr` ，返回任何满足 `arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]` 的下标 `i` ，即山峰顶部。



```javascript
//
var peakIndexInMountainArray = function (arr) {
    let ini = arr[0];
    let res;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > ini) {
            ini = arr[i];
            res = i;
        }
    }
    return res;
};
```

```
思路
1. 就是遍历的方法,寻找最大值.
```

> 二分查找

```js
let left = 1, right = arr.length - 1;

    while (left <= right) {
        const middle = ~~((left + right) / 2);
        if (arr[middle] > arr[middle - 1] && arr[middle] > arr[middle + 1]) {
            return middle;
        } else if (arr[middle] > arr[middle - 1]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

    }
    return l;
```

## 10.15

### [38. 外观数列](https://leetcode-cn.com/problems/count-and-say/)

难度中等808

给定一个正整数 `n` ，输出外观数列的第 `n` 项。

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

你可以将其视作是由递归公式定义的数字字符串序列：

- `countAndSay(1) = "1"`
- `countAndSay(n)` 是对 `countAndSay(n-1)` 的描述，然后转换成另一个数字字符串。

前五项如下：



```
1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1 
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
```



```js
let str = "1";
    for (let i = 2; i <= n; ++i) {
        const sb = [];
        let start = 0;
        let pos = 0;

        while (pos < str.length) {
            while (pos < str.length && str[pos] === str[start]) {
                pos++;
            }
            sb.push('' + (pos - start) + str[start]);
            start = pos;
        }
        str = sb.join('');
    }
    
    return str;
```



## 10.16

### [282. 给表达式添加运算符](https://leetcode-cn.com/problems/expression-add-operators/)

难度困难323

给定一个仅包含数字 `0-9` 的字符串 `num` 和一个目标值整数 `target` ，在 `num` 的数字之间添加 **二元** 运算符（不是一元）`+`、`-` 或 `*` ，返回所有能够得到目标值的表达式。

 

**示例 1:**

```
输入: num = "123", target = 6
输出: ["1+2+3", "1*2*3"] 
```

**示例 2:**

```
输入: num = "232", target = 8
输出: ["2*3+2", "2+3*2"]
```

```js
const ops = ["-", "*", "+", ""];
var addOperators = function(num, target) {    
    const ans = [], path = [];

    const dfs = (idx, sign, curv, val) => {
        let c = num.charAt(idx);
        curv = 10 * curv + (c - '0');
        if(idx == num.length - 1){
            if(target - val == sign * curv){
                path.push(c);
                ans.push(path.join(""));
                path.pop();
            }
        }
        else{
            for(let i=0;i<ops.length;i++){
                path.push(c + ops[i]);
                if(i == 1)
                    dfs(idx+1,sign * curv, 0, val);
                else if(i < 3)
                    dfs(idx+1,i-1, 0, val + sign * curv);
                else if(curv > 0 || c != '0')
                    dfs(idx+1,sign,curv,val);
                path.pop();
            }
        }
    }

    dfs(0, 1, 0, 0);
    return ans;
};
```





## 10.18



### [476. 数字的补数](https://leetcode-cn.com/problems/number-complement/)

难度简单259

对整数的二进制表示取反（`0` 变 `1` ，`1` 变 `0`）后，再转换为十进制表示，可以得到这个整数的补数。

- 例如，整数 `5` 的二进制表示是 `"101"` ，取反后得到 `"010"` ，再转回十进制表示得到补数 `2` 。

给你一个整数 `num` ，输出它的补数。

**示例 1：**

```
输入：num = 5
输出：2
解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
```

> 普通的解法

```js
var findComplement = function (num) {
    let num2 = Number.parseInt(num, 10).toString(2);
    let res = '';
    for (let x of num2) {
        if (x == '1') {
            res = res + '0';
        } else if (x === '0') {
            res = res + '1';
        }
    }
    return Number.parseInt(res, 2).toString(10);
};
```

```
1. 先把传入的字符转换为二进制再进行遍历
2. 进行判断字符 等于 1 进行取反
3. 再把转换的字符变成 10 进制的
```

## 10.22

### [229. 求众数 II](https://leetcode-cn.com/problems/majority-element-ii/)

难度中等503

给定一个大小为 *n* 的整数数组，找出其中所有出现超过 `⌊ n/3 ⌋` 次的元素。

**示例 1：**

```
输入：[3,2,3]
输出：[3]
```

```js
var majorityElement = function (nums) {
    const len = ~~(nums.length / 3);
    const map = new Map();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && map.get(nums) != -1) {
            let val = map.get(nums[i]);
            if (val > len) {
                res.push(nums[i]);
                map.set(nums[i], -1);
            } else {
                map.set(nums[i], val + 1);
            }

        } else {
            map.set(nums[i], 1)
        }
    }
    for (let [key, value] of map.entries()) {
        value > len ? res.push(key) : '';
    }

    return res
};
```



```
1. 哈希表用来处理重复数列
```

## 10.25



### [240. 搜索二维矩阵 II](https://leetcode-cn.com/problems/search-a-2d-matrix-ii/)

难度中等828

编写一个高效的算法来搜索 `*m* x *n*` 矩阵 `matrix` 中的一个目标值 `target` 。该矩阵具有以下特性：

- 每行的元素从左到右升序排列。
- 每列的元素从上到下升序排列。



```js
var searchMatrix = function (matrix, target) {
    const n = matrix[0].length;

    for (let i = 0; i < matrix.length; i++) {
        let l = 0, r = n - 1, mid;
        if (target >= matrix[i][0] && target <= matrix[i][n - 1]) {
            while (l <= r) {
                mid = Math.floor((l + r) / 2);
                if (target == matrix[i][mid]) {
                    return true;
                } else if (target < matrix[i][mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
    }

    return false;
};
```

```
思路 二分法

1. 因为是一个矩形 所以每个矩阵内长度是相同的 先定义这个长度
2. 对该矩阵进行遍历 
3. 对矩阵内部元素进行判断 , 由于是排列好的 可以使用二分法
```

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/11/25/searchgrid2.jpg)

```js
var searchMatrix = (matrix, target) => {
    const m = matrix.length, n = matrix[0].length;

    let y = m - 1, x = 0;
    while (x < n && y >= 0) {

        if (matrix[y][x] === target) {
            return true
        }

        if (matrix[y][x] > target) {
            y--;
        } else {
            x++;
        }
    }

    return false;
}
```



```
由图所示 , 找目标值就是找右下角的数,
```



## 10.26



### [496. 下一个更大元素 I](https://leetcode-cn.com/problems/next-greater-element-i/)

难度简单580

给你两个 **没有重复元素** 的数组 `nums1` 和 `nums2` ，其中`nums1` 是 `nums2` 的子集。

请你找出 `nums1` 中每个元素在 `nums2` 中的下一个比其大的值。

nums1` 中数字 `x` 的下一个更大元素是指 `x` 在 `nums2` 中对应位置的右边的第一个比 `x` 大的元素。如果不存在，对应位置输出 `-1

```js
var nextGreaterElement = function (nums1, nums2) {
    const res = new Array(nums1.length).fill(0);

    for (let i = 0; i < nums1.length; i++) {
        let idx = nums2.indexOf(nums1[i]);
        let k = idx + 1;
        while (k < nums2.length && nums2[k] < nums2[idx]) {
            ++k;
        }
        res[i] = k < nums2.length ? nums2[k] : -1;

    }
    return res;
};
```


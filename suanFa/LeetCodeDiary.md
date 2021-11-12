# 力扣日记 / LeetCode Diary

> 前言

首先祝福伟大的祖国生日快乐，祝繁荣昌盛！10.01日伟大的日子，我决定开始自己的力扣日记，记录刷题的日常，我会尽量的坚持下去。

## 10月

10.01

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

10.02

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

10.03

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

10.04

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



 10.05

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

 10.06

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



 10.07



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



10.08

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



10.09



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



10.10

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

 10.11

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



 10.02

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



 10.13

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



10.14

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

10.15

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



 10.16

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

 10.18

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

10.22

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

10.25



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



10.26



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



10.28



### [869. 重新排序得到 2 的幂](https://leetcode-cn.com/problems/reordered-power-of-2/)

难度中等129

给定正整数 `N` ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。

如果我们可以通过上述方式得到 2 的幂，返回 `true`；否则，返回 `false`。



```js
var reorderedPowerOf2 = function (n) {
    const set = new Set();
    // 一共有30个2的幂
    for (let i = 0; i < 30; i++) {
        // 将每个2的幂的字符串排序后，放入set
        const str = String(2 ** i)
            .split('')
            .sort()
            .join('');
        set.add(str);
    }
    // 查找n的字符串，排序后，有没有在set中出现过
    return set.has(n.toString().split('').sort().join(''));
};
```

10.29

### [67. 二进制求和](https://leetcode-cn.com/problems/add-binary/)

难度简单687

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 **非空** 字符串且只包含数字 `1` 和 `0`。

 示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"


提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

```js
var addBinary = function (a, b) {
    // 获取最长字符串长度
    let len = Math.max(a.length, b.length);
    // 用于拼接结果
    let result = '';
    // 用来进位
    let dividedNumber = 0;

    for (let i = 0; i <= len; i++) {
        // 从字符串末尾取值
        let num1 = parseInt(i >= a.length ? 0 : a[a.length - 1 - i]);
        // 从字符串末尾取值
        let num2 = parseInt(i >= b.length ? 0 : b[b.length - 1 - i]);
        // 取余数
        let mainNumber = (num1 + dividedNumber + num2) % 2;
		// 
        result = '' + mainNumber + result;

        dividedNumber = Math.floor((num1 + num2 + dividedNumber) / 2);
    }

    if (result[0] == 0) {
        return result.slice(1, result.length)
    } else {
        return result;
    }
};
```



 10.30

### [260. 只出现一次的数字 III](https://leetcode-cn.com/problems/single-number-iii/)

难度中等492

给定一个整数数组 `nums`，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 **任意顺序** 返回答案。

 

**进阶：**你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

 

**示例 1：**

```
输入：nums = [1,2,1,3,2,5]
输出：[3,5]
解释：[5, 3] 也是有效的答案。
```

**示例 2：**

```
输入：nums = [-1,0]
输出：[-1,0]
```

**示例 3：**

```
输入：nums = [0,1]
输出：[1,0]
```

**提示：**

- `2 <= nums.length <= 3 * 104`
- `-231 <= nums[i] <= 231 - 1`
- 除两个只出现一次的整数外，`nums` 中的其他数字都出现两次

> 方法一

> 数组操作

```js
var singleNumber = function (nums) {
    let res = [];

    for (let x of nums) {
        if (res.includes(x)) {
            let idx = res.indexOf(x);
            res.splice(idx, 1);
        } else {
            res.push(x)
        }
    }

    return res;
};
```

> 方法二`

> map

```js
var singleNumber = function (nums) {
    const map = new Map();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let val = map.get(nums[i]);
            map.set(nums[i], val + 1);
        } else {
            map.set(nums[i], 1)
        }
    }

    for (let [key, value] of map.entries()) {
        if (value == 1) {
            res.push(key);
        }
    }

    return res;
};
```

> 方法三

```js
var singleNumber = function (nums) {
    const set = new Set();
    let res = [];
    for (let x of nums) {
        if (set.has(x)) {
            set.delete(x)
        } else {
            set.add(x)
        }
    }

    for (let v of set.keys()) {
        res.push(v);
    }

    return res;
};
```



### [1111. 有效括号的嵌套深度](https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/)

难度中等146

**有效括号字符串** 定义：对于每个左括号，都能找到与之对应的右括号，反之亦然。详情参见题末「**有效括号字符串**」部分。

**嵌套深度** `depth` 定义：即有效括号字符串嵌套的层数，`depth(A)` 表示有效括号字符串 `A` 的嵌套深度。详情参见题末「**嵌套深度**」部分。

有效括号字符串类型与对应的嵌套深度计算方法如下图所示：

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/04/01/1111.png)

 

给你一个「有效括号字符串」 `seq`，请你将其分成两个不相交的有效括号字符串，`A` 和 `B`，并使这两个字符串的深度最小。

- 不相交：每个 `seq[i]` 只能分给 `A` 和 `B` 二者中的一个，不能既属于 `A` 也属于 `B` 。
- `A` 或 `B` 中的元素在原字符串中可以不连续。
- `A.length + B.length = seq.length`
- 深度最小：`max(depth(A), depth(B))` 的可能取值最小。 

划分方案用一个长度为 `seq.length` 的答案数组 `answer` 表示，编码规则如下：

- `answer[i] = 0`，`seq[i]` 分给 `A` 。
- `answer[i] = 1`，`seq[i]` 分给 `B` 。

如果存在多个满足要求的答案，只需返回其中任意 **一个** 即可。

 

**示例 1：**

```
输入：seq = "(()())"
输出：[0,1,1,1,1,0]
```

**示例 2：**

```
输入：seq = "()(())()"
输出：[0,0,0,1,1,0,1,1]
解释：本示例答案不唯一。
按此输出 A = "()()", B = "()()", max(depth(A), depth(B)) = 1，它们的深度最小。
像 [1,1,1,0,0,1,1,1]，也是正确结果，其中 A = "()()()", B = "()", max(depth(A), depth(B)) = 1 。 
```

 

**提示：**

- `1 < seq.size <= 10000`

 

**有效括号字符串：**

```
仅由 "(" 和 ")" 构成的字符串，对于每个左括号，都能找到与之对应的右括号，反之亦然。
下述几种情况同样属于有效括号字符串：

  1. 空字符串
  2. 连接，可以记作 AB（A 与 B 连接），其中 A 和 B 都是有效括号字符串
  3. 嵌套，可以记作 (A)，其中 A 是有效括号字符串
```

**嵌套深度：**

```
类似地，我们可以定义任意有效括号字符串 s 的 嵌套深度 depth(S)：

  1. s 为空时，depth("") = 0
  2. s 为 A 与 B 连接时，depth(A + B) = max(depth(A), depth(B))，其中 A 和 B 都是有效括号字符串
  3. s 为嵌套情况，depth("(" + A + ")") = 1 + depth(A)，其中 A 是有效括号字符串

例如：""，"()()"，和 "()(()())" 都是有效括号字符串，嵌套深度分别为 0，1，2，而 ")(" 和 "(()" 都不是有效括号字符串。
```





```js
var maxDepthAfterSplit = function(seq) {
    // 标记深度   
    let depth = 0;

    return seq.split("").map((value) => {
        if (value === ')') {
            --depth;
            return depth % 2;
        } else {
            let ans = depth % 2;
            ++depth;
            return ans;
        }
    });
};
```



10.31



### [500. 键盘行](https://leetcode-cn.com/problems/keyboard-row/)

难度简单180

给你一个字符串数组 `words` ，只返回可以使用在 **美式键盘** 同一行的字母打印出来的单词。键盘如下图所示。

**美式键盘** 中：

- 第一行由字符 `"qwertyuiop"` 组成。
- 第二行由字符 `"asdfghjkl"` 组成。
- 第三行由字符 `"zxcvbnm"` 组成。

![American keyboard](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/keyboard.png)

 

**示例 1：**

```
输入：words = ["Hello","Alaska","Dad","Peace"]
输出：["Alaska","Dad"]
```

**示例 2：**

```
输入：words = ["omk"]
输出：[]
```

**示例 3：**

```
输入：words = ["adsdf","sfd"]
输出：["adsdf","sfd"]
```

 

```js
var findWords = function (words) {
    let list = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    const map = new Map();
    let res = [];
    for (let i = 0; i < list.length; i++) {
        for (let x of list[i]) {
            map.set(x, i);
        }
    }

    for (let i = 0; i < words.length; i++) {
        let flag = map.get(words[i][0].toLowerCase());
        let flag2 = 1;
        for (let x of words[i]) {
            if (map.get(x.toLowerCase()) == flag) {
                flag = map.get(x.toLowerCase());
            } else {
                flag2 = -1;
            }
        }
        if (flag2 != -1) {
            res.push(words[i]);
        }
    }

    return res;
};
```



### [575. 分糖果](https://leetcode-cn.com/problems/distribute-candies/)

难度简单169

给定一个**偶数**长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果。你需要把这些糖果**平均**分给一个弟弟和一个妹妹。返回妹妹可以获得的最大糖果的种类数。

**示例 1:**

```
输入: candies = [1,1,2,2,3,3]
输出: 3
解析: 一共有三种种类的糖果，每一种都有两个。
     最优分配方案：妹妹获得[1,2,3],弟弟也获得[1,2,3]。这样使妹妹获得糖果的种类数最多。
```

**示例 2 :**

```
输入: candies = [1,1,2,3]
输出: 2
解析: 妹妹获得糖果[2,3],弟弟获得糖果[1,1]，妹妹有两种不同的糖果，弟弟只有一种。这样使得妹妹可以获得的糖果种类数最多。
```

**注意:**

1. 数组的长度为[2, 10,000]，并且确定为偶数。
2. 数组中数字的大小在范围[-100,000, 100,000]内。



```js
var distributeCandies = function(candyType) {
    const set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
};
```

## 11月



11.02

### [53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

难度简单3907

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 

**示例 1：**

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

**示例 2：**

```
输入：nums = [1]
输出：1
```



```js
var maxSubArray = function (nums) {
    let pre = 0, res = nums[0];
    for (let x of nums) {
        pre = Math.max(x, pre + x);
        res = Math.max(pre, res);

    }

    return res;
};
```



11.04

### [367. 有效的完全平方数](https://leetcode-cn.com/problems/valid-perfect-square/)

难度简单279

给定一个 **正整数** `num` ，编写一个函数，如果 `num` 是一个完全平方数，则返回 `true` ，否则返回 `false` 。

**进阶：不要** 使用任何内置的库函数，如 `sqrt` 。

 

**示例 1：**

```
输入：num = 16
输出：true
```

**示例 2：**

```
输入：num = 14
输出：false
```



> 二分法

```js
var isPerfectSquare = function (num) {
    let left = 0, right = num;

    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (mid * mid > num) {
            right = mid - 1;
        } else if (mid * mid < num) {
            left = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};
```



```C++
class Solution {
public:
    bool isPerfectSquare(int num) {
       int left = 0, right = num;

	while (left <= right) {
		int mid = floor((right - left) / 2) + left;
        long sqr = (long) mid *mid;
		if (sqr > num) {
			right = mid - 1;
		}
		else if (sqr < num) {
			left = mid + 1;
		}
		else {
			return true;
		}
	}

	return false;
    }
};
```



### [1021. 删除最外层的括号](https://leetcode-cn.com/problems/remove-outermost-parentheses/)

难度简单183

有效括号字符串为空 `""`、`"(" + A + ")"` 或 `A + B` ，其中 `A` 和 `B` 都是有效的括号字符串，`+` 代表字符串的连接。

- 例如，`""`，`"()"`，`"(())()"` 和 `"(()(()))"` 都是有效的括号字符串。

如果有效字符串 `s` 非空，且不存在将其拆分为 `s = A + B` 的方法，我们称其为**原语（primitive）**，其中 `A` 和 `B` 都是非空有效括号字符串。

给出一个非空有效字符串 `s`，考虑将其进行原语化分解，使得：`s = P_1 + P_2 + ... + P_k`，其中 `P_i` 是有效括号字符串原语。

对 `s` 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 `s` 。

 

**示例 1：**

```
输入：s = "(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
```

**示例 2：**

```
输入：s = "(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
```

**示例 3：**

```
输入：s = "()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。
```

1.将原始字符串进行拆分，存在一个二维数组里。
2.将数组里的每项头尾删除，剩余的字符拼接即可。

问题的关键在与如何拆分字符串，将字符串拆成多个数组？
1.维护一个栈，遍历字符串。如果是左括号，则将字符插进栈里，如果是右边括号，则将栈中的最顶元素删掉。
2.在循环中可以根据栈是否为空来决定是否往二维数组里面push新的数组元素，字符则始终往二维数组的最后一个数组元素中push

```js
var removeOuterParentheses = function (s) {
    // 字符串长度
    const len = s.length;
    let res = [];
    let stack = [];
    let resStr = '';

    for (let i in s) {
        if (stack.length === 0) {
            res.push([]);
        }

        res[res.length - 1].push(s[i]);

        if (s[i] === '(') {
            stack.push(s[i])
        } else {
            stack.pop();
        }
    }

    res.forEach(item => {
        item.pop()
        item.shift()
        resStr = resStr + item.join('')
    })

    return resStr
};
```



### [1218. 最长定差子序列](https://leetcode-cn.com/problems/longest-arithmetic-subsequence-of-given-difference/)

难度中等169

给你一个整数数组 `arr` 和一个整数 `difference`，请你找出并返回 `arr` 中最长等差子序列的长度，该子序列中相邻元素之间的差等于 `difference` 。

**子序列** 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 `arr` 派生出来的序列。

 

**示例 1：**

```
输入：arr = [1,2,3,4], difference = 1
输出：4
解释：最长的等差子序列是 [1,2,3,4]。
```

**示例 2：**

```
输入：arr = [1,3,5,7], difference = 1
输出：1
解释：最长的等差子序列是任意单个元素。
```

**示例 3：**

```
输入：arr = [1,5,7,8,5,3,4,2,1], difference = -2
输出：4
解释：最长的等差子序列是 [7,5,3,1]。
```



```js
var longestSubsequence = function (arr, difference) {
    let count = 1;
    const map = new Map();
    for (let x of arr) {
        if (map.has(x - difference)) {
            const v = map.get(x - difference) + 1;
            map.set(x, v);
            count = Math.max(count, v);
        } else {
            map.set(x, 1)
        }
    }

    return count;
};
```

2021 11-07

### [598. 范围求和 II](https://leetcode-cn.com/problems/range-addition-ii/)

难度简单105

给定一个初始元素全部为 **0**，大小为 m*n 的矩阵 **M** 以及在 **M** 上的一系列更新操作。

操作用二维数组表示，其中的每个操作用一个含有两个**正整数 a** 和 **b** 的数组表示，含义是将所有符合 **0 <= i < a** 以及 **0 <= j < b** 的元素 **M[i][j]** 的值都**增加 1**。

在执行给定的一系列操作后，你需要返回矩阵中含有最大整数的元素个数。

**示例 1:**

```
输入: 
m = 3, n = 3
operations = [[2,2],[3,3]]
输出: 4
解释: 
初始状态, M = 
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]

执行完操作 [2,2] 后, M = 
[[1, 1, 0],
 [1, 1, 0],
 [0, 0, 0]]

执行完操作 [3,3] 后, M = 
[[2, 2, 1],
 [2, 2, 1],
 [1, 1, 1]]

M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
```

```js
var maxCount = function (m, n, ops) {
    let len = ops.length;
    if (len !== 0) {
        let l = ops[0][0], r = ops[0][1];
        for (let x of ops) {
            l = Math.min(l, x[0]);
            r = Math.min(r, x[1]);
        }

        return l * r;
    } else {
        return m * n;
    }
};
```

这里需要注意传入数组为空的情况。

11.12

> 二分法

### [374. 猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)

难度简单165

猜数字游戏的规则如下：

- 每轮游戏，我都会从 **1** 到 ***n*** 随机选择一个数字。 请你猜选出的是哪个数字。
- 如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。

你可以通过调用一个预先定义好的接口 `int guess(int num)` 来获取猜测结果，返回值一共有 3 种可能的情况（`-1`，`1` 或 `0`）：

- -1：我选出的数字比你猜的数字小 `pick < num`
- 1：我选出的数字比你猜的数字大 `pick > num`
- 0：我选出的数字和你猜的数字一样。恭喜！你猜对了！`pick == num`

返回我选出的数字。

 

**示例 1：**

```
输入：n = 10, pick = 6
输出：6
```

**示例 2：**

```
输入：n = 1, pick = 1
输出：1
```

**示例 3：**

```
输入：n = 2, pick = 1
输出：1
```

**示例 4：**

```
输入：n = 2, pick = 2
输出：2
```

```js
var guessNumber = function(n) {
  let l = 0 , r = n;
  let mid = 0
  while (l <= r) {
    mid = ~~(l + (r - l) / 2);
    if (guess(mid) === 1) {
      l = mid + 1;
    } else if (guess(mid) === -1) {
      r = mid - 1;
    } else {
      return mid;
    }
  }

  return mid;
};

let pick = 2
let guess = function(n) {
  if (pick < n) {
    return -1;
  } else if (pick > n) {
    return 1;
  } else {
    return 0;
  }
}

guessNumber(2)

```

### [9. 回文数](https://leetcode-cn.com/problems/palindrome-number/)

难度简单1682

给你一个整数 `x` ，如果 `x` 是一个回文整数，返回 `true` ；否则，返回 `false` 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，`121` 是回文，而 `123` 不是。

 

**示例 1：**

```
输入：x = 121
输出：true
```

**示例 2：**

```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例 3：**

```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

**示例 4：**

```
输入：x = -101
输出：false
```

```js
var isPalindrome = function (x) {
    let str = x.toString();
    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if (str[l] === str[r]) {
            l++;
            r--;
        } else {
            return false;
        }
    }

    return true;
};
```


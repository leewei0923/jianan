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

## 10.02

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


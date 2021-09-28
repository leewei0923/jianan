```
author: leewei/李伟
theme: 回文数  / palindrome number
date: 2021.05.31

```
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

 

## 示例 1：
```
输入：x = 121
输出：true
示例 2：

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

```

## 示例 3：


```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

## 示例 4：
```
输入：x = -101
输出：false
 
```
**提示**：

-231 <= x <= 231 - 1
 

进阶：你能不将整数转为字符串来解决这个问题吗？




```javascript

// 是否是回文数

var isPalindrome = function(x) {
 x = String(x)
if(x < 0){
    return false
}else{

    let len = x.length
    let cenl = len/2-1
    let cenr = len/2
    let x1 = add(x.slice(0,cenl+1))
    console.log(x.slice(0,cenl+1))
    console.log(x1)
//     let x2 = add(x.slice(cenr,len))
//     console.log(x.slice(cenr,len-1))
//     console.log(x2)
    if(x1 == x2){
        return true
    }else{
        return false
    }
}

function add(y){
    let strSp = y.split("")
    let addLen = strSp.length
    for(let i = 0;i<addLen;i++){
         let sum =0;;
         let str1 = Number(strSp[i])
         console.log("第"+i+"次"+Number(strSp[i]))
          sum = sum+str1
        console.log("第"+"2"+i+"次"+sum)
    }
    return str1
}
};

a = 1221
a1 = +13275231

isPalindrome(a)


```
```
author: leewei/李伟
date: 2021.05.27
theme: 翻转数/ reverse
```


     # 思路
      - 先判正负
      - 转为正数
      - String 变为字符
       - 使用toSting会出错
      - 在利用字符的方法翻转
      - 再转为数字类型
       - 使用Number()

```javascript

var reverse = function(x) {
let num ;
if(x < 0){
    x = -x;
    x = String(x)
    num = x.split("").reverse().join("")
   num =  -Number(num)                                         
  }else{
    x = String(x)
     num = x.split("").reverse().join("")
    num =  Number(num)
  }
if(num < -Math.pow(2,31)||num > Math.pow(2,31)){
  return 0
}else {
  return num
}
};

x = 123;
x2 = -2147483649;
x3 = 346789
reverse(x3)

```
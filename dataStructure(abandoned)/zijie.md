## 浏览器缓存通信


## promise



## 手写一个类
list队列


## list队列

## sleep()

await
console.log("开始")

await 3000

console.log('结束')

```javascript
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}

async function test(){
    console.log('start');
    await sleep(10000); //10秒后运行
    console.log('end')
}
test()

```


### 智力题

有n个苹果,每次可以拿1,2,3个,你每次至少拿一个,一共有多少种算法

```javascript
// 记忆化搜索
const map = new Map();

function dfs(n){
    if(n < 2) return 1;
    if(n===2) return 2;
    let cnt1 = map.has(n-1) ? map.get(n-1) : dfs(n-1);
    let cnt2 = map.has(n-2) ? map.get(n -2) : dfs( n - 2);
    let cnt3 = map.has(n -3) ? map.get(n -3) : dfs(n -3);
    return cnt1 + cnt2 + cnt3
}

console.log(dfs(5),dfs(4),dfs(3),dfs(2),dfs(1))

function fn(n){
    let dp = [];
    dp[0] = 1, dp[1] = 1, dp[2] = 2;
    for(let i = 3; i <= n;i++) dp[i] = dp[i -1] +dp[i - 2]+dp[i -3];
    return dp[n]
}

console.log(fn(5),fn(4),fn(3),fn(2),fn(1))

```


## promise + setTimeout 输出


## 首页加载缓慢,如何优化 .回答服务器压缩文件,使用cdn,服务器渲染



## cdn是什么,为什么这么快, 如果没有要请求的文件会怎么做


## http缓存,强缓存,协商缓存的流程


## 数组扁平化

- 第一个版本实现,返回新数组(写出来之后要求在原数组之上修改)

- 修改原数组


```

const flat = (array) => {
    for(let i = 0; i < array.length; i++){
        let type = Array.isArray(array[i]);
        if(type){
            flat(array[i]);
            let len = array[i].length;
            array.splice(i , 1, ...array[i]);
            i += len -1;
        }
    }
}
const array = [1,2,[3,4,[5,6,7],8,[9,10,11,[12,13,14,15,16]]]]

flat(array)

console.log(array)

```

## 说说vue的响应式原理, computed 以及watch ,模板解析的过程,生命.

## 浮点数计算精度问题的解决(转为字符串计算或设定容忍误差)

## js数的表示规范,就是IEEE754-64(1位符号位,11为阶码,52位尾数)

## 头部js脚本执行的时候会发生什么


## sessionStorage 和 localStorage 区别,怎么设置过期时间? 区别?


## 盒子模型

## 定位


## display 都有哪些属性 ,img是什么元素 , div是什么元素,span是什么元素


## 怎么垂直居中


## flex 怎么让三个子项目在横向上均等分,

## BFC


## 在一个数组中查找两个数字相加之和等于一个target数字,返回这两个数组的下标
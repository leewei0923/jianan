```
author: leewei/李伟
theme: 最长回文子串  / longest palindromic substring
date: 2021.05.23

```

1. 如果字符串长度小于,直接返回原字符串
2. 定义两个变量, 一个start储存当前找到的最大回文字符串的起始位置,另一个maxLength记录字符串长度(终止位置就是start + maxLength)
3. 创建一个helper function ,判断左边和右边是否越界,同时最左边的字符是否等于最右边的字符,如果以上3个条件都满足,则判断是否需要更新回文字符串的最大长度及最大字符串的起始位置,然后left-- 和right++ ,连续判断,直到不满足三个条件
4. 遍历字符串, 每个字符串调用help function 两遍第一遍检查i-1, i+1, 第二遍检查i , i+1    


## 此方法,对待长字符时候,出现超时问题
```javascript

var longestPalindrome = function(s) {
 let time = new Date()
 let time1 = Date.now()

function getStr(){    
if(s.length > 10){
    let numBox = []
    let numBox2 = []
    let str =  s.split("")
    let map = new Map();
    str.filter(function(item , index , array){
        let numBox2 =[]
        if(array.indexOf(item) !== index){
            num = array.indexOf(item)
            num2 = index
// console.log(num)
// 使用map对象
            map.set(num2 , num) 
            console.log(map)
            for(num ; num <= index; num++){    
                    numBox2.push(str[num])
        }

            if(numBox2.length !== 0 ){
            numBox.push(numBox2.join(""))
            }
    }
    })
    numL = numBox.length
//     console.log(numBox)

    s = numBox[numBox.length - 1]
//     console.log(numBox)
console.log(map.size)

}
}
getStr(s)
console.log(s)
    let str1 = ""; //定义一个变量
    let strBox = [];//定义一个空数组
//     通过for-i for-j循环取出字符
   for(let i =0 ; i < s.length ; i++){
       for(let j = i ; j < s.length; j++){
           str1 = s.slice(i, j +1)  //对字符进行分词
           l = str1.split("").reverse().join("") //将获取到的词进行字符

           if(str1 === l ){ //对当前的字符和翻转后的字符进行对比
           strBox.push(str1) //将true的结果推进数组

       }
   }
   }
   // 对比函数,将用于sort
   function compare(val1 , val2){
       if(val1.length > val2.length){
           return 1;
       }else{
           return -1
       }
   }

   strBoxR = strBox.sort(compare) //经过处理后得到的字符串数组

   strBoxRLen = strBoxR.length
let time2 = Date.now()

console.log('运行时间为'+(time2 - time1)+'ms')
   return strBoxR[strBoxRLen - 1]



    };
x = "babad"
x2 = "abcdefs"
x3 = "aacabdkacaa"
x4 = "aacabdkaca"
x5 = "clwc"
x6 ="bacabab"
x7 ="cbbd"
x8 = "aaaa"
x9 = "abadd"
x10 = "xaabacxcabaaxcabaax"
x11 = "abcda"
x12 = "babadada"
x13 = "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir"
x14 ="bsnetpqmwhqjunkooftuosgkmkxpmvuehtlpwpktltwlvpdaycnhewdbdrhluyjldecezujgxixehsmjjuyerpllrvzqskizkulqzowzfvqcdsllvgupndbaiuzihcxklvxbodpnrymwobhlvllybdlfabfvnizjpriapuzszdhohfgezayokrivbgbgingspoxsridokhwekawchjdcpylvefubulvxneuizglrjktfcdirwnpqztdpsicslzaeiaibrepifxpxfkczwoumkkuaqkbjhxvasxflmrctponwwenvmtdaqaavubyrzbqjbjxpejmucwunanxwpomqyondyjuzxmzpevxqmbkrwcpdiiph"
longestPalindrome(x10)
```
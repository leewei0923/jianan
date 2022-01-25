// 主要为ES5


/**
 * anthor leewei
 * time 2021 10.25
 * task 10进制转为二进制
 */
const Stack = require('./stack');
// 十进制转为二进制

function divideBy2(decNumber) {
    var remStack = new Stack();
    var rem;
    var binaryString = '';

    while (decNumber > 0){ // {1}
        rem = Math.floor(decNumber % 2);
        remStack.push(rem); //{3}
        decNumber = Math.floor(decNumber / 2); //{4}
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}


// console.log(divideBy2(10));
console.log(divideBy2(2))

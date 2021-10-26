const Stack = require('./stack');
// 十进制转为二进制

function divideBy2(decNumber) {
    var remStack = new Stack(),
      rem, binaryString = '';

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
console.log(Stack)

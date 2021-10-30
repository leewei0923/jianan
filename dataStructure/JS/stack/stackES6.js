// ES6 语法

class Stack {
    // 变量只能在constructor 里面声明变量
    constructor(){
        this.items = []; // 1
    }

    // 添加一个(或几个元素)到栈顶
    push(element) {
        this.items.push(element);
    }
    // 移除栈顶的元素  
    pop(){
        if(this.items.length !== 0) {
            this.items.pop();
        }
    }

    // 返回栈顶的元素

    peek() {
        if (this.items.length !== 0) {
          return this.items[this.items.length - 1];
        }
        
    }

    // 判断是否为空栈
    isEmpty() {
        return this.items.length === 0;
    }

    // 移除栈里的所有元素

    clear() {
        this.items = [];
    }

      
    // 返回栈里的元素个数

    size() {
        return this.items.length;
    }

}

module.exports = Stack;

/**
 * author: leewei
 * data: 2022.01.24
 * title: 232. 用栈实现队列 / https://leetcode-cn.com/problems/implement-queue-using-stacks/
 * count: 1
 * status:
 */

class MyQueue {
  constructor() {
    this.myQueue = [];
  }

  push(x) {
    this.myQueue.push(x);
  }

  pop() {
      let tem = this.myQueue[0];
      for(let i = 0; i < this.myQueue.length; i++) {
          if(this.myQueue[i + 1]) {
              this.myQueue[i] = this.myQueue[i + 1];
          } else if(this.myQueue.length == 1) {
              this.myQueue = [];
          }
      }
      this.myQueue.pop();

      return tem;
  }

  peek() {
    return this.myQueue[0];
  }

  empty() {
    if (this.myQueue.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

const m = new MyQueue();

console.log(m)
console.log(m.push(1));
console.log(m.push(2));
console.log(m.push(3));
console.log(m.push(4));
console.log(m.pop());
console.log(m.pop());
console.log(m.pop());
console.log(m.pop());
console.log(m.push(5));
console.log(m.pop());



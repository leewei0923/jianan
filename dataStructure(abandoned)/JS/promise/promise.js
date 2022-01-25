// 手写promise

/**
 * author leewei
 * date 2021 10.30
 * task 手写promise
 */

/**
 * Promise 的状态由什么来决定
 * 1. resolve
 * 2. reject
 * 3. 抛异常
 */

// 状态常量
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  // 1. 两个属性 状态 + 结果
  // 状态 + 结果

  PromiseState = PENDING;
  PromiseResult = undefined;

  //   保存两组回调函数

  fulfilledCbs = [];
  rejectedCbs = [];

  // 构造函数(执行器函数)
  constructor(executor) {
    try {
      // executor(函数1 , 函数2)
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err);
    }
  }

  //   成功状态保存结果
  resolve = (val) => {
    //   状态从pending改变后 , 不能再改变了
    if (this.PromiseState !== PENDING) return;
    this.PromiseState = FULFILLED;
    this.PromiseResult = val;
    while (this.fulfilledCbs.length) {
      this.fulfilledCbs.shift()();
    }
  };

  //   失败的方法 : 设置失败状态 + 保存结果
  reject = (reason) => {
    //   状态从pending改变后 , 不能再改变了
    if (this.PromiseState !== PENDING) return;
    this.PromiseState = REJECTED;
    this.PromiseResult = reason;

    while (this.rejectedCbs.length) {
      this.rejectedCbs.shift()();
    }
  };

  /**
   * 接收两个回调
   *
   * 如果当前的promise 对象为成功状态 , 执行第一个回调
   * 如果当前promise 对象为失败状态 执行第二个回调
   * 如果当前promise对象为待定状态 暂时保存两个回调
   *
   * then 方法会返回一个新的Promise 对象 该对象的状态和结果,
   * 有回调函数的返回值决定
   *
   * 如果返回值是Promise 对象, 返回值决定新的 promise 对象的状态和结果
   * 如果返回值是非promise 对象 新promise 就是成功,值就是返回值
   *
   */

  then(onFulfilled, onRejected) {
    // 判断是否为函数, 不是翻书直接onFilfilled 否则还是返回函数
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const thenPromise = new MyPromise((resolve, reject) => {
      // 方便 向上查找
      const resolvePromise = (cb) => {
        // 异步 微任务内部的异常 外层的try catch 捕捉不到
        queueMicrotask(() => {
          try {
            let x = cb(this.PromiseResult);
            if (x === thenPromise) {
              throw new Error("不能返回自身");
            }
            if (x instanceof MyPromise) {
              x.then(resolve, reject);
            } else {
              resolve(x);
            }
          } catch (err) {
            reject(err);
          }
        });
      };

      if (this.PromiseState === FULFILLED) {
        resolvePromise(onFulfilled);
      } else if (this.PromiseState === REJECTED) {
        resolvePromise(onRejected);
      } else if (this.PromiseState === PENDING) {
        this.fulfilledCbs.push(resolvePromise.bind(this, onFulfilled));
        this.rejectedCbs.push(resolvePromise.bind(this, onRejected));
      }
    });

    return thenPromise;
  }

  /**
   * all 是一个静态方法 需要一个数组作为参数
   * 如果参数数组中 如果所有promise 对象都为成功 返回成功状态的 promise
   * 对参数中 ,值要有一个失败的promise 就返回失败状态的promise 对象
   */

  static all(arr) {
    const result = [];
    let n = 0;
    return new MyPromise((resolve, reject) => {
      const addData = (index, val) => {
        result[index] = val;
        n++;

        if (n === arr.length) {
          resolve(result);
        }
      };

      arr.forEach((item, index) => {
        if (item instanceof MyPromise) {
          item.then((val) => {
            addData(index, val);
          }, reject);
        } else {
          addData(index, item);
        }
      });
    });
  }

  /**
   * race 是一个静态方法 需要一个数组作为参数
   * 返回一个promise
   * 数组中的字面量被视为成功的promise
   * promise的状态和结果,由参数数组中最快得到的结果决定
   */

  static race(arr) {
    return new MyPromise((resolve, reject) => {
      arr.forEach((item) => {
        if (item instanceof MyPromise) {
          item.then(resolve, reject);
        } else {
          queueMicrotask(() => {
            resolve(item);
          });
        }
      });
    });
  }

  /**
   * resolve 静态方法 如果参数为非promise对象
   * 就返回一个成功状态的promise对象
   * 如果是一个promise对象 就原封不动的返回该对象
   */

  static resolve(val) {
    if (val instanceof MyPromise) return val;

    return new MyPromise((resolve) => {
      resolve(val);
    });
  }

  /**
   * reject 是一个静态方法  
   * 返回一个promise对象 
   * 无论是什么值 都会被包裹为失败的promise 对象
   */

  static reject(val) {
    return new MyPromise((reject) => {reject(val)} );
  }

  /**
   *  A对象.finally (p1)
   * 等 p1 执行完毕后,才会执行 then 
   * 如果p1为成功promise , then 接收A对象的结果
   * 如果p1 为失败的promise then 接收p1 对象的结果
   */

  finally(callback) {
    let x = typeof callback === 'function' ? callback() : callback;
    MyPromise.resolve(x).then(() => this);
  }


  /**
   * catch
   */


  catch (onRejected) {
    return this.then(null , onRejected);
  }
}

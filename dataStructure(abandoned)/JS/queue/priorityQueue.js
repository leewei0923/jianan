// 优先队列

/**
 * author leewei
 * date 2021-10-29
 * task 优先队列
 */

function PriorityQueue() {
  let items = [];

  // 创建{ element: '小红', priority: 2 } 格式的数据
  function QueueElement(element, priority) {
    //1
    this.element = element;
    this.priority = priority;
  }

// 入队列操作
  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    // 状态指示作用
    let added = false;
    // 对items中数组进行遍历
    for (let i = 0; i < items.length; i++) {
    // 把小值放在前面 
      if (queueElement.priority < items[i].priority) {
        //2
        items.splice(i, 0, queueElement); //3
        added = true;
        break; //4
      }
    }

    // add状态改变的时候 添加值
    if (!added) {
      items.push(queueElement); //5
    }
  };

  this.print = function () {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  };
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue('小红',2)
priorityQueue.enqueue("小王", 4);
priorityQueue.enqueue("小李", 5);
priorityQueue.enqueue("小明", 1);

priorityQueue.print()


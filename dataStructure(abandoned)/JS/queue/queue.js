// 队列

/**
 * author 李伟
 * date: 2021-10-29
 * task: 队列数据结构
 */


function Queue() {

    items = [];
    // enqueue(element(s)) 向队列尾部添加一个或多个新的项

    this.enqueue = function (element) {
        items.push(element);
    }

    // dequeue(); 移除队列的第一 (排在队列最前面的)项 并返回被移除的元素


    this.dequeue = function () {
        return items.shift();
    }
    // front() 返回队列中第一个元素 最先被添加的 也是最先被移除的元素, 队列不做任何改动

    this.front = function () {
        return items[0];
    }

    // isEmpty() 如果队列中不包含任何元素 返回true 否则返回false

    this.isEmpty = function () {
        return items.length == 0;
    }

    // size() 返回队列的元素个数与数组的length属性相似

    this.size = function () {
        return items.length;
    }

    // 打印队列元素

    this.print = function () {
        console.log(items.toString());
    }
}


module.exports = Queue;
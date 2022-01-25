// 击鼓传花

/**
 * author leewei
 * date 2021-10-29
 * task 击鼓传花
 */
const Queue = require("./queue");



function hotPotato (nameList, num) {
    const queue = new Queue();

    for(let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let lucyman = '';

    while (queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }

        lucyman = queue.dequeue(); 

        console.log(lucyman + ',' +'在击鼓传花中被淘汰');
    }

    return queue.dequeue(); //5
}


let names = ['张三','李四','王小花','赵六','钱七','徐玖','赵红','李明','崔部'];

let random = Math.random() * names.length;
let  winter = hotPotato(names,random)

console.log('胜利者'+winter);
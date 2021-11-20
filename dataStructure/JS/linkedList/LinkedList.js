// 创建链表

/**
 * author leewei
 * date 2021 10-30
 * task 链表
 */


function LinkedList (){

    //  LinkedList 数据结构需要一个Node辅助类 Node类表示要加入列表的项
    // 它包含一个element 属性 即要添加到列表的值 以及一个next 属性 指向列表中下一个节点

    let Node = function(element) {  // 1
        this.element = element;
        this.next = null;
    } 

    let length = 0;                 // 2
    let head = null;                // 3

    this.append = function(element){
        let node = new Node(element), current;

        if(head === null) {
            head = node;
        } else {
            current = head; 

            // 循环列表, 直到找到最后一项

            while(current.next) {
                current = current.next;
            }

            // 找到最后一项, 将其next 赋为node, 建立链接
            current.next = node; 
        }

        length++;   // 更新列表的长度
    }


    this.insert = function(position , element) {

        // 检查越界值

        if(position >= 0 && position <= length) {

            let node = new Node(element);
            current = head, previous, index = 0;
            if(position === 0) { // 在第一个位置添加
                node.next = current;
                head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }

            length++; // 更新列表的长度

            return true;
        } else {
            return false;                                                                                                                                                                                                                                                                               
        }
    }

    this.removeAt = function(position) {
        // 检查越界值
        if(position > -1 && position < length) {
            let current = head, previous, index = 0;

            // 移除第一项
            if(position === 0) {
               head = current.next;
            } else {

                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // 将previous 与 current 的下一项链接起来 跳过current 从而移除它
                previous.next = current.next;
            }

            length--;
            return current.element;
        } else {
            return null;
        }
    }

    this.remove = function(element) {
        let index = this.indexof(element);
        return this.removeAt(index);
    }

    this.indexof = function(element){

        let current = head;
        index = -1;

        while(current) {
            if(element === current.element) {
                return index;
            }  

            index++;
            current = current.next;
        }

        return -1;
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.size = function() {
        return length;
    }

    this.getHead = function() {
        return head;
    }

    this.toString = function() {
        // 要访问列表中的所有元素 , 就需要一个起点 就是head 吧current 变量当作
        // 索引 控制循环访问列表 还需要初始化用于拼接元素的值的变量
        let current = head;
        string = '';
        while( current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next; 
        }

        return string;
    }

    this.print = function() {
        const nodes = [];

        let current = head;
        while(current) {
            nodes.push(current.element);
            current = current.next;
        }
        return nodes.join(' -> ');
    }
}


module.exports = LinkedList;
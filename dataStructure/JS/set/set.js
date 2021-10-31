/**
 * author leewei
 * date 2021 10.31
 * task set 集合
 */

function Set(){

    let items = [];
    // 向集合添加一个新的项
    this.add = function (value) {
        if(!this.has(value)) {
            items[value] = value;
            return true;
        }
    }

    // 从集合中移除一个值

    this.remove = function (value) {
      if (this.has(value)) {
        delete items[value];
        return true;
      } else {
        return false;
      }
    };

    // 如果值在集合中返回true, 否则返回false
    this.has = function (value) {
        // return value in items;

        return items.hasOwnProperty(value);
    }

    

    // 移除集合中所有的项
    this.clear = function () {

    }

    //  返回集合中所包含元素的数量,与数组的length 属性类似

    this.size = function () {
      // 使用JavaScript内建的Object类的一个内建函数（ECMAScript 5以上版本）：
      return Object.keys(items).length;
    }

    // 返回一个包含几个中所有值的数组

    this.values = function () {

        let values = [];

        for(let key in items) {
            if(items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    }

    // 集合操作

    this.union = function (otherSet) {
        let unionSet = new Set();

        let values = this.values();
        for(let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for(let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }
    
}

module.exports = Set;
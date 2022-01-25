// 创建一个类表示栈

function Stack() {
  // 选择数组来保存栈里面的元素

  let items = [];

  //   向栈里面添加元素
  this.push = function (element) {
    items.push(element);
  };

  // 从栈里面删除元素

  this.pop = function () {
    return items.pop();
  };

  // 查看栈顶元素

  this.peek = function () {
    return items[items.length - 1];
  };

  // 检查栈是否为空

  this.isEmpty = function () {
    return items.length == 0;
  };

  //   返回栈的长度

  this.size = function () {
    return items.length;
  };

  // 清空栈

  this.clear = function () {
    items = [];
  };

  //   打印

  this.print = function () {
    console.log(items.toString());
  };
  
}

module.exports = Stack;


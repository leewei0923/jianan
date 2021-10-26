const BinarySearchTree = require("./BinarySearchTree");

var tree = new BinarySearchTree()

tree.insert(11)

tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25); 
// console.log(BinarySearchTree);

function printNode(value) {
    console.log(value);
}

// 中序遍历
// tree.inOrderTraverse(printNode)  

// 先序遍历
// tree.preOrderTraverse(printNode)

// 后序遍历

tree.postOrderTraverse(printNode)
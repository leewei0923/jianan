// 二叉搜索树（BST）

/**
 * author leewei
 * task 二叉搜索树
 * time 2021 10.26
 */


/**
 * 二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
在右侧节点存储（比父节点）大（或者等于）的值。上一节的图中就展现了一棵二叉搜索树。
 */

function BinarySearchTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var root = null;

  // insert(key) 向树中插入一个新键

  this.insert = function (key) {
    /**
     * 创建用老表示新结点Node 类的实例
     * 中需要向构造函数传递想要用来插入树的节点值, 它的左指针 和 右指针 的值会由构造函数自动设置为null
     *
     */
    var newNode = new Node(key); // 1

    /**
     * 验证插入操作是否为一种特殊情况 是否为 root 根节点
     * 如果是 将根节点指向新节点
     */
    if (root === null) {
      // 2
      root = newNode;
    } else {
      insertNode(root, newNode); // 3
    }
  };

  /**
   * 添加一个私有的辅助函数
   */

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      // 4
      if (node.left === null) {
        // 5
        node.left = newNode; // 6
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        // 8
        node.right = newNode; // 9
      } else {
        insertNode(node.right, newNode); // 10
      }
    }
  };



  // search(key) 在树中查找一个键，如果节点存在，则返回true；如果不存在则返回false


  this.search = function(key) {
      return searchNode(root,key);  // 1
  }

  var searchNode = function(node, key) {
      if(node === null) {   // 2
        return false;
      }

      if(key < node.key) {  // 3
        return searchNode(node.left,key);  // 4
      } else if(key > node.key) {          // 5
        return searchNode(node.right, key); // 6
      } else {
          return true;                      // 7
      }
  };


  // inOrderTraverse 通过中序遍历方式遍历所有节点

  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback); //1
  };
  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      //2
      inOrderTraverseNode(node.left, callback); //3
      callback(node.key); // 4
      inOrderTraverseNode(node.right, callback); // 5
    }
  };

  // preOrderTraverse 通过先序遍历方式遍历所有节点

  this.preOrderTraverse = function(callback) {
      preOrderTraverseNode(root, callback);
  };

  var preOrderTraverseNode = function (node,callback) {
      if(node !== null) {
          callback(node.key); // 1
          preOrderTraverseNode(node.left,callback); // 2
          preOrderTraverseNode(node.right, callback); // 3
      }
  }

  // postOrderTraverse 通过后序遍历方式遍历所有节点


  this.postOrderTraverse = function(callback) {
      postOrderTraverseNode(root, callback);
  }

  var postOrderTraverseNode = function (node, callback) {
      if(node !== null) {
          postOrderTraverseNode(node.left, callback);   // 1
          postOrderTraverseNode(node.right, callback);  // 2
          callback(node.key);                           // 3
      }
  }

  // min 返回树中最小的值 / 键

  /**
   *  min方法暴露给用户 这个方法调用 minNode 方法
   * @returns 
   */
  this.min = function() {
      return minNode(root);                     // 1
  }

  var minNode = function (node) {
      if(node) {
          while (node && node.left !== null) { // 2
            node = node.left;                  // 3
          }

          return node.key;
      }

      return null;                             // 4
  }

  // max 返回树中最大的值 / 键

  this.max = function() {
      return maxNode(root);
  }

  var maxNode = function (node) {
      if (node) {
          while(node && node.right !== null) { // 5
            node = node.right;
          }
          return node.key;
      }

      return null;
  }
  // remove(key) 从树中移除某个键

  this.remove = function(key) {
      root = removeNode(root, key); // 1
  }

  var removeNode = function(node,key) { 
      if(node === null) {           // 2
        return null;
      } 

      if(key < node.key) {          // 3
        node.left = removeNode(node.left,key); // 4
        return node;                // 5
      } else if(key > node.key) {   // 6
        node.right = removeNode(node.right, key);// 7
        return node;                // 8
      } else {                      // 键等于 node.key

        // 第一种情况   一个叶节点
        if(node.left === null && node.right === null) { // 9
            node = null; // 10
            return node; // 11
        } 

        // 第二种情况  一个只有一个子节点的节点

        if(node.left === null) {    // 12
            node = node.right;      // 13
            return node;            // 14
        } else if(node.right === null) { // 15
            node = node.left;        // 16
            return node;             // 17
        }

        // 第三种情况   一个有两个子节点的节点

        var aux = findMinNode(node.right); // 18

        node.key = aux.key;                // 19
        node.right = removeNode(node.right ,aux.key); // 20
        return node;                       // 21
      }
  }

  var findMinNode = function(node) {
      while (node && node.left !== null) {
          node = node.left;
      }

      return node;
  }
}

module.exports = BinarySearchTree;
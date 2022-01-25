/**
 * author: leewei
 * data: 2022.01.14
 * title: 110. 平衡二叉树 / https://leetcode-cn.com/problems/balanced-binary-tree/
 * count: 1
 * status: non
 */
var isBalanced = function (root) {
  let flag = true;

  const dfs = (root) => {
    if (root === null) return 0;

    const leftValue = dfs(root.left);
    const rightValue = dfs(root.right);
    console.log(rightValue);
    if (Math.abs(rightValue - leftValue) > 1) {
      flag = false;
    }

    return 1 + Math.max(leftValue, rightValue);
  };
  dfs(root);
  return flag;
};
/**
 * author: leewei
 * data: 2022.01.12
 * title: 124. 二叉树中的最大路径和 / https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 * count: 1
 */

var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    const dfs = (root) => {
        if(root == null) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);

        let innerNum = left + right + root.val;
        
        maxSum = Math.max(maxSum, innerNum);

        outNum = root.val + Math.max(0, left, right);

        return outNum < 0 ? 0 : outNum;
    }

    dfs(root);

    return maxSum;
};
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        return this.validNodes(root, -Infinity, Infinity);
    }

    validNodes(node, leftBound, rightBound){
        if (!node) return true;

        if(!(node.val > leftBound && node.val < rightBound)) return false;

        return (
            this.validNodes(node.left,leftBound, node.val) &&
            this.validNodes(node.right, node.val, rightBound)); 
    }
}

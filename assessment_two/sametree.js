// Problem: Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Solution Algorithm:
// I iterated through the two trees simultaneously and check the corresponding nodes.
// I recursively compared left and right subtrees.



class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSameTree(p, q) {
    if (!p && !q) {
        return true;
    }

    if (!p || !q || p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Example:

// Tree 1:    
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// Tree 2:     
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(tree1, tree2)); // Output: true

// Tree 3:     
const tree3 = new TreeNode(1, new TreeNode(2), null);

console.log(isSameTree(tree1, tree3)); // Output: false

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_RBT_1 = require("./Node.RBT");
var BinarySearchTree = (function () {
    function BinarySearchTree() {
        this.heightCount = 0;
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (data) {
        var newNode = new Node_RBT_1.Node(data);
        if (this.root === null) {
            this.root = newNode;
            this.root.height = this.heightCount;
        }
        else {
            this.__insertNewNode(this.root, newNode);
        }
    };
    BinarySearchTree.prototype.__insertNewNode = function (node, newNode) {
        this.heightCount += 1;
        if (newNode.data < node.data) {
            if (node.left === null) {
                newNode.parent = node;
                newNode.sibling = node.right;
                newNode.height = this.heightCount;
                node.left = newNode;
                this.heightCount = 0;
            }
            else {
                this.__insertNewNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                newNode.parent = node;
                newNode.sibling = node.left;
                newNode.height = this.heightCount;
                node.right = newNode;
                this.heightCount = 0;
            }
            else {
                this.__insertNewNode(node.right, newNode);
            }
        }
    };
    BinarySearchTree.prototype.getRootNode = function () {
        return this.root;
    };
    BinarySearchTree.prototype.getNodeParent = function (ToFindNode, node) {
        if (node !== null) {
            if (ToFindNode == node.data) {
                console.log(node.parent);
                return;
            }
            else if (ToFindNode > node.data) {
                if (node.right === null) {
                    console.log('no result');
                    return;
                }
                else {
                    this.getNodeParent(ToFindNode, node.right);
                }
            }
            else if (ToFindNode < node.data) {
                if (node.left === null) {
                    console.log('no result');
                    return;
                }
                else {
                    this.getNodeParent(ToFindNode, node.left);
                }
            }
        }
        else {
            return;
        }
    };
    BinarySearchTree.prototype.inorder = function (node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
var example1 = new BinarySearchTree();
example1.insert(10);
example1.insert(8);
example1.insert(18);
example1.insert(13);
var root = example1.getRootNode();
example1.getNodeParent(13, root);
//# sourceMappingURL=BST.RBT.js.map
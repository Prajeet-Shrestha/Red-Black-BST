"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_RBT_1 = require("./Node.RBT");
var RedBlackTree = (function () {
    function RedBlackTree() {
        this.heightCount = 0;
        this.root = null;
    }
    RedBlackTree.prototype.getRootNode = function () {
        return this.root;
    };
    RedBlackTree.prototype.insert = function (data) {
        var newNode = new Node_RBT_1.Node(data);
        if (this.root === null) {
            this.root = newNode;
            this.root.height = this.heightCount;
            this.root.color = 'black';
        }
        else {
            this.__insertNewNode(this.root, newNode);
        }
    };
    RedBlackTree.prototype.__insertNewNode = function (node, newNode) {
        this.heightCount += 1;
        if (newNode.data < node.data) {
            if (node.left === null) {
                newNode.parent = node;
                newNode.sibling = node.right;
                if (newNode.sibling !== null) {
                    newNode.sibling.sibling = newNode;
                }
                newNode.height = this.heightCount;
                newNode.color = 'red';
                node.left = newNode;
                this.heightCount = 0;
                if (newNode.parent.color == 'red') {
                    this.__OperationIfParentColorRed(newNode, node, newNode);
                }
            }
            else {
                this.__insertNewNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                newNode.parent = node;
                newNode.sibling = node.left;
                if (newNode.sibling !== null) {
                    newNode.sibling.sibling = newNode;
                }
                newNode.color = 'red';
                newNode.height = this.heightCount;
                node.right = newNode;
                this.heightCount = 0;
                if (newNode.parent.color == 'red') {
                    this.__OperationIfParentColorRed(newNode, node, newNode, 'right');
                }
            }
            else {
                this.__insertNewNode(node.right, newNode);
            }
        }
    };
    RedBlackTree.prototype.__OperationIfParentColorRed = function (node, root, newNode, side) {
        var _a;
        if (node !== null) {
            if (node.parent !== null && node.parent.sibling !== null) {
                console.log('enetered!', node.parent.sibling.color);
                if (node.parent.sibling.color == 'red') {
                    node.parent.color = 'black';
                    node.parent.sibling.color = 'black';
                    if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.parent) != this.root) {
                        if (node.parent !== null && node.parent.parent !== null) {
                            node.parent.parent.color = this.__reColor(node.parent.parent);
                            this.__OperationIfParentColorRed(node.parent.parent, root, newNode);
                        }
                    }
                }
            }
            else {
                if (side == 'right') {
                    this.__LEFTROTATION(this.root, node.parent.parent);
                }
                else {
                    this.__RIGHTROTATION(this.root, node.parent.parent);
                }
            }
        }
    };
    RedBlackTree.prototype.__reColor = function (node) {
        if (node !== null) {
            if (node.color == 'black') {
                return 'red';
            }
            else {
                return 'black';
            }
        }
        else {
            return 'black';
        }
    };
    RedBlackTree.prototype.__LEFTROTATION = function (T, x) {
        var y = x.right;
        x.right = y.left;
        if (y.left !== null) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            T = y;
        }
        else if (x == x.parent.left) {
            x.parent.left = y;
        }
        else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
        y.color = this.__reColor(y);
        x.color = this.__reColor(x);
        this.root = T;
    };
    RedBlackTree.prototype.__RIGHTROTATION = function (T, x) {
        var y = x.left;
        x.left = y.right;
        if (y.right !== null) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            T = y;
        }
        else if (x == x.parent.left) {
            x.parent.left = y;
        }
        else {
            x.parent.right = y;
        }
        y.right = x;
        x.parent = y;
        y.color = this.__reColor(y);
        x.color = this.__reColor(x);
        this.root = T;
    };
    return RedBlackTree;
}());
exports.RedBlackTree = RedBlackTree;
var RBT = new RedBlackTree();
RBT.insert(10);
RBT.insert(15);
RBT.insert(3);
RBT.insert(12);
RBT.insert(11);
console.log(RBT.getRootNode());
//# sourceMappingURL=app.RBT.js.map
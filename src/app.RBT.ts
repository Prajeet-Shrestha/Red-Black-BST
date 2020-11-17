import { Node } from './Node.RBT';

export class RedBlackTree {
  root: null | Node;
  heightCount: number = 0;
  constructor() {
    this.root = null;
  }

  getRootNode() {
    return this.root;
  }

  insert(data: number) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      this.root.height = this.heightCount;
      this.root.color = 'black';
    } else {
      this.__insertNewNode(this.root, newNode);
    }
  }

  private __insertNewNode(node: Node, newNode: Node) {
    this.heightCount += 1;
    if (newNode.data < node.data) {
      if (node.left === null) {
        newNode.parent = node;
        newNode.sibling = node.right;
        // Checking if there's a sibling of previous
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
      } else {
        this.__insertNewNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        newNode.parent = node;
        newNode.sibling = node.left;
        // Checking if there's a sibling of previous
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
      } else {
        this.__insertNewNode(node.right, newNode);
      }
    }
  }

  private __OperationIfParentColorRed(
    node: Node,
    root: Node,
    newNode: Node,
    side?: 'left' | 'right'
  ) {
    if (node !== null) {
      if (node.parent !== null && node.parent.sibling !== null) {
        console.log('enetered!', node.parent.sibling.color);
        if (node.parent.sibling.color == 'red') {
          node.parent.color = 'black';
          node.parent.sibling.color = 'black';
          if (node.parent?.parent != this.root) {
            if (node.parent !== null && node.parent.parent !== null) {
              node.parent.parent.color = this.__reColor(node.parent.parent);
              this.__OperationIfParentColorRed(
                node.parent.parent,
                root,
                newNode
              );
            }
          }
        }
      } else {
        // TODO: Perform The Rotations
        if (side == 'right') {
          this.__LEFTROTATION(this.root, node.parent.parent);
        } else {
          this.__RIGHTROTATION(this.root, node.parent.parent);
        }
        // this.__insertNewNode(root, node.parent);
      }
    }
  }

  private __reColor(node: Node | null): 'red' | 'black' {
    if (node !== null) {
      if (node.color == 'black') {
        return 'red';
      } else {
        return 'black';
      }
    } else {
      return 'black';
    }
  }

  private __LEFTROTATION(T: Node, x: Node) {
    let y = x.right;
    x.right = y.left;
    if (y.left !== null) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      T = y;
    } else if (x == x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
    y.color = this.__reColor(y);
    x.color = this.__reColor(x);
    this.root = T;
  }

  private __RIGHTROTATION(T: Node, x: Node) {
    let y = x.left;
    x.left = y.right;
    if (y.right !== null) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === null) {
      T = y;
    } else if (x == x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.right = x;
    x.parent = y;
    y.color = this.__reColor(y);
    x.color = this.__reColor(x);
    this.root = T;
  }
}

let RBT = new RedBlackTree();
RBT.insert(10);
RBT.insert(15);
RBT.insert(3);
RBT.insert(12);
RBT.insert(11);
console.log(RBT.getRootNode());

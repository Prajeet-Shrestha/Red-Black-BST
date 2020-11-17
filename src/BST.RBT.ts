import { Node } from './Node.RBT';

export class BinarySearchTree {
  root: null | Node;
  heightCount: number = 0;
  constructor() {
    this.root = null;
  }

  insert(data: number) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      this.root.height = this.heightCount;
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
        newNode.height = this.heightCount;
        node.left = newNode;

        this.heightCount = 0;
      } else {
        this.__insertNewNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        newNode.parent = node;
        newNode.sibling = node.left;
        newNode.height = this.heightCount;
        node.right = newNode;
        this.heightCount = 0;
      } else {
        this.__insertNewNode(node.right, newNode);
      }
    }
  }

  getRootNode() {
    return this.root;
  }

  getNodeParent(ToFindNode: number, node: Node | null) {
    if (node !== null) {
      if (ToFindNode == node.data) {
        console.log(node.parent);
        return;
      } else if (ToFindNode > node.data) {
        if (node.right === null) {
          console.log('no result');
          return;
        } else {
          this.getNodeParent(ToFindNode, node.right);
        }
      } else if (ToFindNode < node.data) {
        if (node.left === null) {
          console.log('no result');
          return;
        } else {
          this.getNodeParent(ToFindNode, node.left);
        }
      }
    } else {
      return;
    }
  }

  inorder(node: Node | null) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

let example1 = new BinarySearchTree();
example1.insert(10);
example1.insert(8);
example1.insert(18);
example1.insert(13);
let root = example1.getRootNode();
// console.log(root);
example1.getNodeParent(13, root);

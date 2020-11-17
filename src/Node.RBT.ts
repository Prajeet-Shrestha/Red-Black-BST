export class Node {
  data: number;
  left: Node | null;
  color: 'red' | 'black' | null;
  right: Node | null;
  BalancingFactor: number | null;
  height: null | number;
  parent: Node | null;
  sibling: Node | null;
  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.color = null;
    this.height = null;
    this.sibling = null;
    this.parent = null;
    this.BalancingFactor = null;
  }
}

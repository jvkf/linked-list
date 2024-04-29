import Node from "./node.mjs";
export default class LinkedList {
  constructor() {
    this.head = null;
  }

  init(value) {
    const node = new Node();
    node.value = value;
    this.head = node;
  }
}

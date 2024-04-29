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

  append(value) {
    const node = new Node();
    const tail = this.tail();

    node.value = value;
    getFinalNode.next = node;
  }

  head() {
    return this.head;
  }

  tail() {
    let node = this.head;

    while (node !== null) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }

    return null;
  }
}

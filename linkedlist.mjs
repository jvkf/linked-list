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
    tail.next = node;
  }

  prepend(value) {
    const newHead = new Node();
    const oldHead = this.head;

    newHead.value = value;
    newHead.next = oldHead;
    this.head = newHead;
  }

  at(index) {
    let node = this.head;
    let counter = 0;

    while (node !== null) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter += 1;
    }

    return null;
  }

  size() {
    let node = this.head;
    let size = 0;

    while (node !== null) {
      size += 1;
      node = node.next;
    }

    return size;
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

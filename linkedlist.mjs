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
    if (this.head === null) {
      throw new Error("Empty list. Please init");
    }
    const node = new Node();
    const tail = this.getTail();

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

  insertAt(index, value) {
    let size = this.size();
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === size) {
      this.append(value);
      return;
    } else if (index <= 0 || index >= size) {
      throw new Error("Out of boundaries");
    }
    const insertNode = new Node();
    const prevIndexNode = this.at(index - 1);
    const currentIndexNode = this.at(index);

    insertNode.value = value;
    insertNode.next = currentIndexNode;
    prevIndexNode.next = insertNode;
  }

  removeAt(index) {
    let size = this.size();
    if (index === 0) {
      this.head = this.head.next;
      return;
    } else if (index <= 0 || index >= size) {
      throw new Error("Out of boundaries");
    }
    const prevNode = this.at(index - 1);
    const nextNode = this.at(index + 1);

    prevNode.next = nextNode;
  }

  pop() {
    let node = this.head;
    let size = this.size();

    if (size === 0) {
      throw new Error("Empty list");
    }

    if (node.next === null) {
      this.head = null;
    }

    while (node !== null) {
      if (node.next.next === null) {
        node.next = null;
        return "Removed";
      }
      node = node.next;
    }

    return null;
  }

  contains(value) {
    let node = this.head;

    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  find(value) {
    let node = this.head;
    let idx = 0;

    while (node !== null) {
      if (node.value === value) {
        return idx;
      }
      node = node.next;
      idx += 1;
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

  getHead() {
    return this.head;
  }

  getTail() {
    let node = this.head;

    while (node !== null) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }

    return null;
  }

  toString() {
    let node = this.head;
    let tempArr = [];

    while (node !== null) {
      tempArr.push(`( ${node.value} )`);
      if (node.next === null) {
        tempArr.push("null");
      }
      node = node.next;
    }

    return tempArr.join(" -> ");
  }
}

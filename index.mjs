import LinkedList from "./linkedlist.mjs";

const list = new LinkedList();
list.init("test");
list.append("test2");
list.append("test3");
console.log(list.toString());

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head)
    this.head = node
  }
}

module.exports = { Node, LinkedList };

// initial: create new Node w/ passed in data, unsure how to link pre-existing
// node/head to new head :: well shit, I was *close*

// insertFirst(data) {
//   data = new Node(data, LinkedList.head)
// }

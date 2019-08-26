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

  size() {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return null
    }
    let node = this.head
    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
  }

}


module.exports = { Node, LinkedList };

// initial insertFirst(): create new Node w/ passed in data, unsure how to link
// pre-existing node/head to new head :: well shit, I was *close*

// insertFirst(data) {
//   data = new Node(data, LinkedList.head)
// }

// initial size():
// size() {
//   let counter = 0
//   if (this.head || this.next) {
//     counter += 1
//   }
//   return counter
//
// }

// initial getLast(): whoops, another infinite while loop...
// getLast() {
//   let node = this.head
//   while (node) {
//     if (node.next !== null) {
//       node = node.next
//     }
//     return node
//   }
// }

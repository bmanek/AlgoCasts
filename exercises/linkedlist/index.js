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

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return
    }
    if (this.head.next === null) {
    // or if (!this.head.next)
      this.head = null
      return
    }

    let previous = this.head
    let node = previous.next
    while (node.next) {
      previous = node
      node = node.next
    }
    previous.next = null
  }
// attempt
  insertLast(data) {
    let current = this.getLast()
    let inserted = new Node(data)
    if (!this.head) {
      this.head = inserted
    } else {
      current.next = inserted
    }
  }
// alt solution
// insertLast(data) {
//   const last = this.getLast()
//
//   if (last) {
//     last.next = new Node(data)
//   } else {
//     this.head = new Node(data)
//   }
// }

// attempt
// getAt(index) {
//   let size = this.size()
//   if (index > size) return null
//   let counter = 0
//   let node = this.head
//   if (node) {
//     while (counter < index) {
//       node = node.next
//       counter++
//     }
//     return node
//   }
// }

// official solution
  getAt(index) {
    // 'while (node)' on 124 effectively does the work of lines 118-119. They're
    // commented out, but included to demonstrate/clarify the redundancy
    // if (!this.head) {
    //   return null
    // }
    let counter = 0
    let node = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    return null
  }

// attempt
  removeAt(index) {
    if (!this.head) {
      return null
    }

    if (index === 0) {
      return this.removeFirst()
    }

    if (index > (this.size() - 1)) {
      return null
    }

    else {
      let eraser = this.getAt(index).next
      let prev = this.getAt(index - 1)
      prev.next = eraser
    }
  }

  // official solution
  // removeAt(index) {
    //   if (!this.head) {
      //     return
      //   }
      //   if (index === 0) {
        //     this.head = this.head.next
        //     return
        //   }
        //   const previous = this.getAt(index - 1)
        //   if (!previous || !previous.next) {
          //     return
          //   }
          //   previous.next = previous.next.next
          //
          // }
// attempt
  // insertAt(data, index) {
  //   if (!this.head && index === 0) {
  //     this.insertLast(data)
  //     return
  //   }
  //   if (index === 0) {
  //     this.insertFirst(data)
  //     return
  //   }
  //   if (index > this.size - 1) {
  //     this.insertLast(data)
  //     return
  //   }
  //   if (index < this.size) {
  //     let counter = 0
  //     let prev = this.head
  //     let node = prev.next
  //     while (index < counter) {
  //       prev = prev.next
  //       counter++
  //     }
  //   }
  // }

// solution
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }
    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    const previous = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previous.next)
    previous.next = node
  }

  forEach(fn) {
    let node = this.head
    let counter = 0
    while (node) {
      fn(node, counter)
      node = node.next
      counter++
    }
  }
// review generator methods
  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
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

// initial removeLast(): eh.
// removeLast() {
//   let node = this.head
//   while (node.next !== null) {
//     node = node.next
//   }
//   return node
// }

// second attempt removeLast()
// removeLast() {
//   let previous = this.head
//   let node = previous.next
//   while (previous.next) {
//     previous = node
//     if (node.next === null) {
//       previous.next === null
//     }
//   }
// }

// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


// First pass. Totally spaced on how to do things the description described.
// class Node {
//   constructor(data){
//     data = this.data
//     children = []
//   }
//
//   add(data) {
//     return new Node(data)
//   }
//
//   remove() {
//
//   }
// }

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    const node = new Node(data)
    this.children.push(node)

    // Or, the above body written as a one-liner:
    // this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => {
       return node.data !== data
    })
  }
}

class Tree {
  constructor() {
    this.root = null
  }

// initial. Super tired, super lazy
  // traverseBF(fn) {
  //   let holder = []
  //   holder.push(this.head)
  //   while (this.head.children) {
  //     holder.push(children)
  //   }
  // }

// actual
  traverseBF(fn) {
    const arr = [this.root]
    while (arr.length) {
      const node = arr.shift()
      // ln71 won't work; it'd return a nested array. No bueno
      // arr.push(node.children)

      // one way around that...
      // for (let child of node.children) {
      //   arr.push(child)
      // }

      // ...and another.  The spread operator takes every element of
      //  node.children, which are then pushed to arr.
      // Spread grabs each element individually, & not whole array structure
      arr.push(...node.children)
      fn(node)
    }

  }
}

module.exports = { Tree, Node };

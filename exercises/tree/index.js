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

  traverseDF(fn) {
    // creates the array for traversal, holds the root node at start
    const arr = [this.root]
    // while there is something in the array...
    while (arr.length) {
      // remove the first node in the array...
      const node = arr.shift()

      // and add that node's children to the (BF:end DF:start) of the array...
      arr.unshift(...node.children)

      // ...and call the function passed into traverseDF with the node we
      // shifted out
      fn(node)
    }
  }
}

// thinking thru BF vs. DF. Didn't implement a DF solution at this point

// in BF, you go thru the root node, add it's children to the end of the array
// each node in the array is checked for children, then removed.
// the function that was passed into traverse() accepts the removed node as arg

// in DF, you go thru the root node, and it checks for children.
// If there is a child, proceed to child. If no child, add the siblings to arr.
// if empty, return to parent's sibling.

module.exports = { Tree, Node };

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]


// traverseBF(fn) {
//   const arr = [this.root]
//   while (arr.length) {
//     const node = arr.shift()
//     arr.push(...node.children)
//     fn(node)
//   }
// }

// couldn't do the attempt

function levelWidth(root) {
  const arr = [root, "stop"]
  const counters = [0]

  while (arr.length > 1) {
    const node = arr.shift()

    if (node === "stop") {
      counters.push(0)
      arr.push("stop")
    } else {
      arr.push(...node.children)
      counters[counters.length - 1]++
    }
  }
  return counters
}

module.exports = levelWidth;

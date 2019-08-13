// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let flipped = n.toString().split("").reverse().join("")
  let cleaned = parseInt(flipped.slice(0, flipped[flipped.length-3]))
  if (Math.sign(n) === -1) {
    debugger
    return -1 * cleaned
  }
}

reverseInt(-431)

module.exports = reverseInt;

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// solution 1
// function reverseInt(n) {
//   let flipped = n.toString().split("").reverse().join("")
//   if (Math.sign(n) === -1) {
//     return -1 * parseInt(flipped)
//   }
//   return parseInt(flipped)
// }

// cleaner solution 1
function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("")
  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

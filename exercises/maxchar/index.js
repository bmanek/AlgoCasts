// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// strategy: turn array into object where each letter is a key, and value
// corresponds to frequency

// solution 1
// function maxChar(str) {
//   const counter = {}
//
//   for (let char of str) {
//     if (!counter[char]) {
//       counter[char] = 1
//     } else {
//       counter[char]++
//     }
//   }
//   return counter
//
// }

// alt solution 1

function maxChar(str) {
  const counter = {}
  let max = 0
  let maxKey = ""

  for (let char of str) {
    if (counter[char]) {
      counter[char]++
    } else {
      counter[char] = 1
    }
  }

  for (let char in counter) {
    if (counter[char] > max) {
      max = counter[char]
      maxKey = char
    }
  }

  return maxKey
}

// briefer solution 1
// function maxChar(str) {
//   counter[char] = counter[char] + 1 || 1
// }


module.exports = maxChar;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// original below

// function reverse(str) {
//   let temp = []
//   let reversedArr = str.split()
//   reversedArr.forEach(x => {
//     temp.push(x)
//   }).join("")
//
//   console.log(reversedArr)
// }

// solution 1
// function reverse(str) {
//   let reversed = str.split("").reverse()
//   return reversed.join("")
// }

// cleaner solution 1
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("")
// }

// solution 2
// function reverse(str) {
//   let reversed = []
//   str.split("").forEach(letter => {reversed.unshift(letter)})
//   return reversed.join("")
// }

// cleaner solution 2
// function reverse(str) {
//   let reversed = ""
//
//   // new for loop format
//
//   for (let char of str) {
//     reversed = char + reversed
//   }
//   return reversed
// }

// solution 3
function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed
  })
}



module.exports = reverse;

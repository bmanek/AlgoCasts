// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// initial effort (all tests passing!)
// function vowels(str) {
//   vowelCounter = 0
//   regex = RegExp(/[aeiou]/)
//     for (let char of str) {
//       if (regex.test(char.toLowerCase())) {
//         vowelCounter += 1
//       }
//     }
//   return vowelCounter
// }

// solution 1 (iterative)
// function vowels(str) {
//   let count = 0;
//   const vowelList = ['a', 'e', 'i', 'o', 'u']
//
//   for (let char of str.toLowerCase() ) {
//     if (vowelList.includes(char)) {
//       count++
//     }
//   }
//
//   return count;
// }

// solution 2 (RegEx)
function vowels(str) {
  // regex w/in /'s, g is option to continue past match, and i means case-
  // insensitive

  // NB: .match() returns null if no matches are found. ternary handles this
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}


module.exports = vowels;

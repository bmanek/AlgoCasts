// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// // solution 1: first pass
// function palindrome(str) {
//   let reversed = str.split("").reverse().join("")
//   if (reversed === str) {
//     return true
//   } else {
//     return false
//   }
// }

// solution 2: cleaner
// function palindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return reversed === str
// }

// solution 3: using 'every'

function palindrome(str) {
  return str.split("").every((char, i) => {
    debugger
    return char === (str[str.length - i - 1])
  })
}

module.exports = palindrome;

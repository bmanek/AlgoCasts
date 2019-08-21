// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// initial effort (all tests passing!)
function vowels(str) {
  vowelCounter = 0
  regex = RegExp(/[aeiou]/)
    for (let char of str) {
      if (regex.test(char.toLowerCase())) {
        vowelCounter += 1
      }
    }
  return vowelCounter
}

// refactor/official


module.exports = vowels;

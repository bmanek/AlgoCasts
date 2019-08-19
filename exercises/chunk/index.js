// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// solution 1
// function chunk(array, size) {
//   const bigChunk = []
//   for (let element of array) {
//     const last = bigChunk[bigChunk.length - 1]
//
//     if (!last || last.length === size) {
//       bigChunk.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//   return bigChunk
// }

// solution 2 (YAY IT WORKED!!!!)
function chunk(array, size) {
  const bigChunk = []
  let index = 0
  while (index < array.length) {
    bigChunk.push(array.slice(index, index + size))
    index += size
  }
  return bigChunk
}

module.exports = chunk;

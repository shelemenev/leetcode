/*
Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's _.chunk function.
*/

function chunk(arr, size) {
  if (!Array.isArray(arr) || arr.length === 0 || size <= 0) {
    return []
  }

  const result = []

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }

  return result
}

console.log(chunk([1, 2, 3, 4, 5], 1))
console.log(chunk([1, 9, 6, 3, 2], 3))
console.log(chunk([8, 5, 3, 2, 6], 6))
console.log(chunk([], 1)) 

/*

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

*/

function map(arr, fn) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i))
  }
  return result
}

const arr1 = [1, 2, 3]
const plusOne = function(n) { return n + 1; }
console.log(map(arr1, plusOne))

const arr2 = [1, 2, 3]
const plusI = function(n, i) { return n + i; }
console.log(map(arr2, plusI))

const arr3 = [10, 20, 30]
const constant = function() { return 42; }
console.log(map(arr3, constant))
/*

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

*/

function filter(arr, fn) {
  const filteredArr = []

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i])
    }
  }
  return filteredArr
}

const arr1 = [0, 10, 20, 30]
const fn1 = function greaterThan10(n) { return n > 10; }
console.log(filter(arr1, fn1))

const arr2 = [1, 2, 3]
const fn2 = function firstIndex(n, i) { return i === 0; }
console.log(filter(arr2, fn2))

const arr3 = [-2, -1, 0, 1, 2]
const fn3 = function plusOne(n) { return n + 1; }
console.log(filter(arr3, fn3))

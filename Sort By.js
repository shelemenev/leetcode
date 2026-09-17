/*
Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.
*/

function sortBy(arr, fn) {
  return arr.slice().sort((a, b) => fn(a) - fn(b))
}

const arr1 = [5, 4, 1, 2, 3]
const fn1 = (x) => x
console.log('Пример 1:', sortBy(arr1, fn1))

const arr2 = [{ x: 1 }, { x: 0 }, { x: -1 }]
const fn2 = (d) => d.x
console.log('Пример 2:', sortBy(arr2, fn2));

const arr3 = [[3, 4], [5, 2], [10, 1]]
const fn3 = (x) => x[1]
console.log('Пример 3:', sortBy(arr3, fn3))
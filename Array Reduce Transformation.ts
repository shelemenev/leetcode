/*

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

*/

type ReducerFn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: ReducerFn, init: number): number {
  if (nums.length === 0) {
    return init
  }

  let accumulator: number = init

  for (let i = 0; i < nums.length; i++) {
    accumulator = fn(accumulator, nums[i])
  }

  return accumulator
}

const nums1 = [1, 2, 3, 4]
const fn1 = (accum: number, curr: number) => accum + curr
const init1 = 0
console.log(reduce(nums1, fn1, init1))

const nums2 = [1, 2, 3, 4]
const fn2 = (accum: number, curr: number) => accum + curr * curr
const init2 = 100
console.log(reduce(nums2, fn2, init2))

const nums3: number[] = []
const fn3 = (accum: number, curr: number) => 0
const init3 = 25
console.log(reduce(nums3, fn3, init3))










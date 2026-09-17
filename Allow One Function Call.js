/*

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

*/

function once(fn) {
  let called = false

  return function (...args) {
    if (called) {
      return undefined
    }
    called = true
    return fn(...args)
  }
}

const fn1 = (a, b, c) => a + b + c
const onceFn1 = once(fn1)
console.log(onceFn1(1, 2, 3))
console.log(onceFn1(2, 3, 6))

const fn2 = (a, b, c) => a * b * c
const onceFn2 = once(fn2)
console.log(onceFn2(5, 7, 4))
console.log(onceFn2(2, 3, 6))
console.log(onceFn2(4, 6, 8))
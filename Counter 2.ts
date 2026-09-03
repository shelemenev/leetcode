/*

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

*/

function createCounter(init: number) {
  let current = init

  return {
    increment: (): number => {
      current += 1
      return current
    },
    decrement: (): number => {
      current -= 1
      return current
    },
    reset: (): number => {
      current = init
      return current
    }
  }
}

const counter1 = createCounter(5)
console.log(counter1.increment())
console.log(counter1.reset())
console.log(counter1.decrement())

const counter2 = createCounter(0)
console.log(counter2.increment())
console.log(counter2.increment())
console.log(counter2.decrement())
console.log(counter2.reset())
console.log(counter2.reset())












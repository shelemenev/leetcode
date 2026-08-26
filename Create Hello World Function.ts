/*

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

*/

function createHelloWorld(): (...args: unknown[]) => string {
  return (...args: unknown[]): string => {
    return "Hello World"
  }
}

const f = createHelloWorld()

console.log(f())
console.log(f({}, null, 42))
console.log(f("любые", "аргументы"))









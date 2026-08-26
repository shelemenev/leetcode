/*

Write a function argumentsLength that returns the count of arguments passed to it.

*/

function argumentsLength(...args) {
  return args.length
}

console.log(argumentsLength(5))               
console.log(argumentsLength({}, null, "3"))
console.log(argumentsLength())
console.log(argumentsLength(1, 2, 3, 4, 5))






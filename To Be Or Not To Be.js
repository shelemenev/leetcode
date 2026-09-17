/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

function expect(val) {
  return {
    toBe(otherVal) {
      if (val === otherVal) {
        return true
      }
      throw new Error('Not Equal')
    },
    notToBe(otherVal) {
      if (val !== otherVal) {
        return true
      }
      throw new Error('Equal')
    }
  }
}

console.log(expect(5).toBe(5))

try {
  expect(5).toBe(null)
} catch (e) {
  console.error(e.message)
}

console.log(expect(5).notToBe(null))

try {
  expect(5).notToBe(5);
} catch (e) {
  console.error(e.message)
}

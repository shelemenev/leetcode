/*
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
*/

function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([num1, num2]) => num1 + num2)
}

const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(promise1, promise2).then(result => {
  console.log(result)
})

const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50))
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30))

addTwoPromises(promise3, promise4).then(result => {
  console.log(result)
})

/*
Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
*/

function cancellable(fn, args, t) {
  fn(...args)
  const intervalId = setInterval(() => fn(...args), t)
  return () => clearInterval(intervalId)
}

function runExample(name, fn, args, t, cancelTimeMs) {
  return new Promise((resolve) => {
    const result = []
    const cancelFn = cancellable((...a) => {
      const v = fn(...a)
      result.push({ time: result.length * t, returned: v })
      return v
    }, args, t)
    setTimeout(() => {
      cancelFn()
      resolve({ name, result })
    }, cancelTimeMs)
  })
}

(async () => {
  const p1 = runExample('Пример 1', (x) => x * 2, [4], 35, 190)
  const p2 = runExample('Пример 2', (x1, x2) => x1 * x2, [2, 5], 30, 165)
  const p3 = runExample('Пример 3', (x1, x2, x3) => x1 + x2 + x3, [5, 1, 3], 50, 180)

  const [ex1, ex2, ex3] = await Promise.all([p1, p2, p3])

  console.log(ex1.name, ex1.result)
  console.log(ex2.name, ex2.result)
  console.log(ex3.name, ex3.result)
})()
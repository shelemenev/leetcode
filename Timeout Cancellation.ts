/*

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

*/

type Fn = (...args: any[]) => any

function cancellable(fn: Fn, args: any[], t: number): () => void {
  let timerId: number | undefined

  timerId = setTimeout(() => {
    fn(...args)
  }, t)

  return () => {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
  }
}

const results1: any[] = []
const log1 = (...vals: any[]) => {
  results1.push({ time: Date.now(), returned: vals })
}

const t1 = 200
const cancelTimeMs1 = 50

const cancelFn1 = cancellable(log1, ['Hello (отменено)'], t1)
setTimeout(cancelFn1, cancelTimeMs1)

setTimeout(() => {
  console.log('Тест 1 (отмена):', results1)
}, 300)

const results2: any[] = []
const log2 = (...vals: any[]) => {
  results2.push({ time: Date.now(), returned: vals })
}

const t2 = 50
const cancelTimeMs2 = 200

const cancelFn2 = cancellable(log2, ['Hello (выполнено)'], t2)
setTimeout(cancelFn2, cancelTimeMs2)

setTimeout(() => {
  console.log('Тест 2 (выполнение):', results2)
}, 300)




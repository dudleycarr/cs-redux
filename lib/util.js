import { promisify } from 'util'

export function promisifyAll(obj) {
  for (let key in obj) {
    const func = obj[key]
    if (typeof func === 'function') {
      obj[key] = promisify(func)
    }
  }

  return obj
}

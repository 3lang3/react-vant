import { isObject } from './base'
import { debounce } from './debounce'

// https://github.com/lodash/lodash/blob/master/throttle.js
function throttle(func, wait, options?) {
  let leading = true
  let trailing = true

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }
  return debounce(func, wait, {
    leading,
    trailing,
    'maxWait': wait,
  })
}

export default throttle

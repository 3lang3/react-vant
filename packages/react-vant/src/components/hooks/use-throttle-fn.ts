import { useMemo } from 'react'
import useLatest from './use-latest'
import useUnmount from './use-unmount'
import { isFunction } from '../utils'
import throttle from '../utils/throttle'

interface ThrottleOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
}

type noop = (...args: any) => any

function useThrottleFn<T extends noop>(fn: T, options?: ThrottleOptions) {
  if (process.env.NODE_ENV === 'development') {
    if (!isFunction(fn)) {
      console.error(
        `useThrottleFn expected parameter is a function, got ${typeof fn}`
      )
    }
  }

  const fnRef = useLatest(fn)

  const wait = options?.wait ?? 1000

  const throttled = useMemo(
    () =>
      throttle(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...(args as any))
        },
        wait,
        options
      ),
    []
  )

  useUnmount(() => {
    throttled.cancel()
  })

  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush,
  }
}

export default useThrottleFn

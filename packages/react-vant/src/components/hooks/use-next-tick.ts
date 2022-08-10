import { useEffect, useCallback } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useNextTick = (fn?: () => void) => {
  const nextTick = useCallback((handler?: () => void) => {
    if (handler) {
      Promise.resolve().then(() => handler())
    }
  }, [])

  useEffect(() => {
    if (fn) {
      nextTick(fn)
    }
    return () => {}
  }, [fn, nextTick])

  return fn ?? nextTick
}

export default useNextTick

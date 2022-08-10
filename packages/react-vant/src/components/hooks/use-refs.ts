/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

export default function useRefs() {
  const refs = React.useRef<HTMLDivElement[]>([])

  const setRefs = React.useCallback(
    (index: number) => (el: HTMLDivElement) => {
      if (el) refs.current[index] = el
    },
    []
  )

  const reset = React.useCallback(() => {
    refs.current = []
  }, [])

  return [refs.current, setRefs as any, reset]
}

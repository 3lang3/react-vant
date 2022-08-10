import { SetStateAction, useRef } from 'react'
import useMemoizedFn from './use-memoized-fn'
import useUpdate from './use-update'

type Options<T> = {
  value?: T
  defaultValue?: T
  onChange?: (v: T) => void
}

export default function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options

  const update = useUpdate()

  const stateRef = useRef<T>(value !== undefined ? value : defaultValue)
  if (value !== undefined) {
    stateRef.current = value
  }

  const setState = useMemoizedFn(
    (v: SetStateAction<T>, forceTrigger?: boolean) => {
      // `forceTrigger` means trigger `onChange` even if `v` is the same as `stateRef.current`
      const nextValue =
        typeof v === 'function'
          ? (v as (prevState: T) => T)(stateRef.current)
          : v
      if (!forceTrigger && nextValue === stateRef.current) return
      stateRef.current = nextValue
      update()
      onChange?.(nextValue)
    }
  )
  return [stateRef.current, setState] as const
}

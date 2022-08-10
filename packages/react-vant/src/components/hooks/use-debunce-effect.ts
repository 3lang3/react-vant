import { useEffect, useState } from 'react'
import type { DependencyList, EffectCallback } from 'react'
import type { DebounceOptions } from './use-debunce-fn'
import useDebounceFn from './use-debunce-fn'
import useUpdateEffect from './use-update-effect'

function useDebounceEffect(
  effect: EffectCallback,
  deps?: DependencyList,
  options?: DebounceOptions
) {
  const [flag, setFlag] = useState({})

  const { run } = useDebounceFn(() => {
    setFlag({})
  }, options)

  useEffect(() => {
    return run()
  }, deps)

  useUpdateEffect(effect, [flag])
}

export default useDebounceEffect

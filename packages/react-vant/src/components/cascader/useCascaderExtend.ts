import { useMemo } from 'react'

import type { CascaderProps } from './PropsType'

type KeysProps = {
  textKey: string
  valueKey: string
  childrenKey: string
}

export function useCascaderExtend(
  options: CascaderProps['options'],
  keys: KeysProps,
  value: string[]
) {
  const { childrenKey, valueKey } = keys

  const depth = useMemo(() => {
    let depth = 0
    function traverse(options: CascaderProps['options'], currentDepth: number) {
      if (currentDepth > depth) depth = currentDepth
      const nextDepth = currentDepth + 1
      options.forEach(option => {
        if (option[childrenKey]) {
          traverse(option[childrenKey], nextDepth)
        }
      })
    }
    traverse(options, 1)
    return depth
  }, [options, childrenKey])

  const tabs = useMemo(() => {
    if (!value || !value.length) {
      return [options] ?? []
    }
    return value.reduce(
      (a, v, i) => {
        if (!v) return a
        const next = a[i].find(option => option[valueKey] === value[i])
        if (next && next[childrenKey]) a.push(next[childrenKey])
        return a
      },
      [options]
    )
  }, [value, childrenKey, valueKey, options])

  const items = useMemo(() => {
    return value.map((val, i) => {
      const item = tabs[i].find(tab => tab[valueKey] === val) ?? undefined
      return item
    })
  }, [value, valueKey, tabs])

  return { tabs, items, depth }
}

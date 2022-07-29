import { useState } from 'react'
import { BasicTarget, getTargetElement } from '../utils/dom/getTargetElement'
import useEffectWithTarget from './use-effect-with-target'

export interface Options {
  rootMargin?: string
  threshold?: number | number[]
  root?: BasicTarget<Element>
}

function useInViewport(target: BasicTarget, options?: Options) {
  const [state, setState] = useState<boolean>()
  const [ratio, setRatio] = useState<number>()

  useEffectWithTarget(
    () => {
      const el = getTargetElement(target) as Element
      if (!el) {
        return
      }

      const observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            setRatio(entry.intersectionRatio)
            setState(entry.isIntersecting)
          }
        },
        {
          ...options,
          root: getTargetElement(options?.root) as Element,
        }
      )

      observer.observe(el)

      return () => {
        observer.disconnect()
      }
    },
    [],
    target
  )

  return [state, ratio] as const
}

export default useInViewport

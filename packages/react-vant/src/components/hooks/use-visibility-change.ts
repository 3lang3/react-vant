import React, { useEffect, useState } from 'react'
import { inBrowser } from '../utils'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useVisibilityChange(
  target: React.MutableRefObject<Element | undefined>,
  onChange?: (visible: boolean) => void
) {
  const [state, setState] = useState<boolean>()
  useEffect(() => {
    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!(!inBrowser || !window.IntersectionObserver)) {
      const observer = new IntersectionObserver(
        entries => {
          // visibility changed
          onChange?.(entries[0].intersectionRatio > 0)
          for (const entry of entries) {
            setState(entry.isIntersecting)
          }
        },
        { root: document.body }
      )

      const observe = () => {
        if (target.current) {
          observer.observe(target.current)
        }
      }

      const unobserve = () => {
        if (target.current) {
          observer.unobserve(target.current)
        }
      }

      observe()
      return unobserve
    }
  }, [target.current])

  return [state] as const
}

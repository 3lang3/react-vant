import React from 'react'
import { inBrowser } from '../utils'
import { createUpdateEffect } from './create-update-effect'

export const useIsomorphicLayoutEffect = inBrowser
  ? React.useLayoutEffect
  : React.useEffect

export const useIsomorphicUpdateLayoutEffect = createUpdateEffect(
  useIsomorphicLayoutEffect
)

export default useIsomorphicLayoutEffect

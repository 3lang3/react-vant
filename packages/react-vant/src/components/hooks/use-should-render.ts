import { FC, ReactElement, useRef } from 'react'

function useInitialized(check?: boolean) {
  const initializedRef = useRef(check)
  if (check) {
    initializedRef.current = true
  }
  return !!initializedRef.current
}

interface Props {
  active: boolean
  forceRender?: boolean
  destroyOnClose?: boolean
  children: ReactElement
}

export const ShouldRender: FC<Props> = props => {
  const shouldRender = useShouldRender(
    props.active,
    props.forceRender,
    props.destroyOnClose
  )
  return shouldRender ? props.children : null
}

export function useShouldRender(
  active: boolean,
  forceRender?: boolean,
  destroyOnClose?: boolean
) {
  const initialized = useInitialized(active)
  if (forceRender) return true
  if (active) return true
  if (!initialized) return false
  return !destroyOnClose
}

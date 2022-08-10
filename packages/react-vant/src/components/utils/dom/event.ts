import React, { ReactElement, TouchEvent } from 'react'

export function stopPropagation(event): void {
  event.stopPropagation()
}

export function preventDefault(
  event: TouchEvent | Event,
  isStopPropagation?: boolean
): void {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    stopPropagation(event as Event)
  }
}

export type PropagationEvent = 'click'

const eventToPropRecord: Record<PropagationEvent, string> = {
  'click': 'onClick',
}

// https://github.com/ant-design/ant-design-mobile/blob/master/src/utils/with-stop-propagation.tsx
export function withStopPropagation(events: string[], element: ReactElement) {
  const props: Record<string, any> = { ...element.props }
  for (const key of events) {
    const prop = eventToPropRecord[key]
    props[prop] = function (e: Event) {
      e.stopPropagation()
      element.props[prop]?.(e)
    }
  }
  return React.cloneElement(element, props)
}

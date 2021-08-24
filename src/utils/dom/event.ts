import { TouchEvent } from 'react';

export function stopPropagation(event): void {
  event.stopPropagation();
  event?.nativeEvent?.stopImmediatePropagation();
}

export function preventDefault(event: TouchEvent | Event, isStopPropagation?: boolean): void {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event as Event);
  }
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useRef } from 'react';
import useSetState from './use-set-state';

const MIN_DISTANCE = 10;

type Direction = '' | 'vertical' | 'horizontal';

function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

const INITIAL_STATE = {
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  offsetX: 0,
  offsetY: 0,
  direction: '' as Direction,
};

const useTouch = (stateable?: boolean) => {
  const refState = useRef(INITIAL_STATE);
  const state = useSetState(INITIAL_STATE);

  const update = (value) => {
    if (stateable) {
      state[1](value);
    } else {
      refState.current = {
        ...refState.current,
        ...value,
      };
    }
  };

  const innerState = stateable ? state[0] : refState.current;

  const deltaYRef = useRef<number>(0);

  const isVertical = useCallback(() => innerState.direction === 'vertical', [innerState.direction]);
  const isHorizontal = useCallback(
    () => innerState.direction === 'horizontal',
    [innerState.direction],
  );

  const reset = () => {
    update({
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0,
      direction: '',
    });
    deltaYRef.current = 0;
  };

  const start = ((event: TouchEvent) => {
    reset();
    update({
      startX: event.touches[0].clientX,
      startY: event.touches[0].clientY,
    });
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];

    // Fix: Safari back will set clientX to negative number
    const newState = {} as typeof innerState;

    newState.deltaX = touch.clientX < 0 ? 0 : touch.clientX - innerState.startX;
    newState.deltaY = touch.clientY - innerState.startY;
    newState.offsetX = Math.abs(innerState.deltaX);
    newState.offsetY = Math.abs(innerState.deltaY);

    deltaYRef.current = newState.deltaY;

    if (!innerState.direction) {
      newState.direction = getDirection(Math.abs(newState.offsetX), Math.abs(newState.offsetY));
    }

    update(newState);
  }) as EventListener;

  return {
    ...innerState,
    move,
    start,
    reset,
    deltaYRef,
    isVertical,
    isHorizontal,
  };
};

export default useTouch;

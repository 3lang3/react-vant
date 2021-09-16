/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useRef } from 'react';

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

const useTouch = () => {
  const state = useRef({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    direction: '' as Direction,
  });

  const deltaYRef = useRef<number>(0);

  const isVertical = useCallback(
    () => state.current.direction === 'vertical',
    [state.current.direction],
  );
  const isHorizontal = useCallback(
    () => state.current.direction === 'horizontal',
    [state.current.direction],
  );

  const reset = () => {
    state.current.deltaX = 0;
    state.current.deltaY = 0;
    state.current.offsetX = 0;
    state.current.offsetY = 0;
    state.current.direction = '';

    deltaYRef.current = 0;
  };

  const start = ((event: TouchEvent) => {
    reset();
    state.current.startX = event.touches[0].clientX;
    state.current.startY = event.touches[0].clientY;
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];

    // Fix: Safari back will set clientX to negative number
    state.current.deltaX = touch.clientX < 0 ? 0 : touch.clientX - state.current.startX;
    state.current.deltaY = touch.clientY - state.current.startY;
    state.current.offsetX = Math.abs(state.current.deltaX);
    state.current.offsetY = Math.abs(state.current.deltaY);

    deltaYRef.current = state.current.deltaY;

    if (!state.current.direction) {
      state.current.direction = getDirection(Math.abs(state.current.offsetX), Math.abs(state.current.offsetY));
    }
  }) as EventListener;

  return {
    ...state.current,
    move,
    start,
    reset,
    deltaYRef,
    isVertical,
    isHorizontal,
  };
};

export default useTouch;

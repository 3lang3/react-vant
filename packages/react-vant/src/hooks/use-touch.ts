/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useCallback, useRef } from 'react';

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
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [deltaX, setDeltaX] = useState<number>(0);
  const [deltaY, setDeltaY] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [direction, setDirection] = useState<Direction>('');

  const deltaYRef = useRef<number>(0);

  const isVertical = useCallback(() => direction === 'vertical', [direction]);
  const isHorizontal = useCallback(() => direction === 'horizontal', [direction]);

  const reset = () => {
    setDeltaX(0);
    setDeltaY(0);
    setOffsetX(0);
    setOffsetY(0);
    setDirection('');

    deltaYRef.current = 0;
  };

  const start = ((event: TouchEvent) => {
    reset();
    setStartX(event.touches[0].clientX);
    setStartY(event.touches[0].clientY);
  }) as EventListener;

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0];

    const _deltaX = touch.clientX - startX;
    const _deltaY = touch.clientY - startY;

    setDeltaX(_deltaX);
    setDeltaY(_deltaY);
    setOffsetX(Math.abs(_deltaX));
    setOffsetY(Math.abs(_deltaY));

    deltaYRef.current = _deltaY;

    if (!direction) {
      setDirection(getDirection(Math.abs(_deltaX), Math.abs(_deltaY)));
    }
  }) as EventListener;

  return {
    move,
    start,
    reset,
    startX,
    startY,
    deltaX,
    deltaY,
    offsetX,
    offsetY,
    direction,
    deltaYRef,
    isVertical,
    isHorizontal,
  };
};

export default useTouch;

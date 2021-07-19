import { useState } from 'react';
import { inBrowser } from '../utils';
import useEventListener from './use-event-listener';

function useWindowSize(): { width: number; height: number } {
  const [width, setWidth] = useState(inBrowser ? window.innerWidth : 0);
  const [height, setHeight] = useState(inBrowser ? window.innerHeight : 0);

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEventListener('resize', onResize);
  useEventListener('orientationchange', onResize);

  return { width, height };
}

export default useWindowSize;

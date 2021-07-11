/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useEffect } from 'react';
import useRect from './use-rect';

export const useHeight = (element: { current: Element | undefined }): number => {
  const height = useRef<number>(0);

  useEffect(() => {
    height.current = useRect(element.current).height;
  }, [element.current]);

  return height.current;
};

export default useHeight;

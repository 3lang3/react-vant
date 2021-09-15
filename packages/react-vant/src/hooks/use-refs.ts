/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useRef } from 'react';

export default function useRefs() {
  const refs = useRef<HTMLDivElement[]>([]);

  const setRefs = (index: number) => (el: HTMLDivElement) => {
    refs.current[index] = el;
  };

  return [refs.current, setRefs as any];
}

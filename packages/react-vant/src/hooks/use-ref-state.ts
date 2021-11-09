import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useRefState<T>(initialState: T | (() => T)) {
  const [state, setState] = useState<T>(initialState);
  const ref = useRef<T>(state);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return [state, setState, ref] as const;
}

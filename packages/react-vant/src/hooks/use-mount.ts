import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};

export default useMount;

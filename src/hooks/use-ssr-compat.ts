import { useCallback, useEffect, useState } from 'react';
import { inBrowser } from '../utils';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useSsrCompat() {
  const [mounted, setMounted] = useState(inBrowser);

  useEffect(() => {
    if (inBrowser) return;
    setMounted(true);
  }, []);

  return useCallback((render: () => any) => (mounted ? render() : null), [mounted]);
}

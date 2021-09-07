import React, { useCallback, useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useSsrCompat() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return useCallback((render: () => JSX.Element) => (mounted ? render() : null), [mounted]);
}

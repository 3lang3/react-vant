import { useCallback, useEffect, useState } from 'react';

export default function useSsrCompat() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return useCallback((render: () => any) => (mounted ? render() : null), [mounted]);
}

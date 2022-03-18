/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react';
import { inBrowser } from '../utils';
import useEventListener from './use-event-listener';

type VisibilityState = 'visible' | 'hidden';

function usePageVisibility(): VisibilityState {
  const [visibility, _setVisibility] = useState<VisibilityState>('visible');

  const setVisibility = () => {
    if (inBrowser) {
      _setVisibility(document.hidden ? 'hidden' : 'visible');
    }
  };

  useEffect(() => {
    setVisibility();
  }, []);

  useEventListener('visibilitychange', setVisibility, { depends: [visibility] });

  return visibility;
}

export default usePageVisibility;

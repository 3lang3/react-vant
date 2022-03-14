/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect, useState } from 'react';
import { inBrowser } from '../utils';
import useEventListener from './use-event-listener';

function usePageVisibility(): DocumentVisibilityState {
  const [visibility, _setVisibility] = useState<DocumentVisibilityState>('visible');

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

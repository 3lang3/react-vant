import { useEffect } from 'react';
import { inBrowser } from '../utils';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useVisibilityChange(
  target: React.MutableRefObject<Element | undefined>,
  onChange: (visible: boolean) => void,
) {
  useEffect(() => {
    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!inBrowser || !window.IntersectionObserver) {
      return null;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        // visibility changed
        onChange(entries[0].intersectionRatio > 0);
      },
      { root: document.body },
    );

    const observe = () => {
      if (target.current) {
        observer.observe(target.current);
      }
    };

    const unobserve = () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };

    observe();
    return unobserve;
  }, [target.current]);
}

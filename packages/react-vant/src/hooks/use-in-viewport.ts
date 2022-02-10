import { useEffect, useState } from 'react';
import { inBrowser } from '../utils';
import { getTargetElement, BasicTarget } from '../utils/dom/getTargetElement';

type InViewport = boolean | undefined;

function isInViewPort(el: HTMLElement): InViewport {
  if (!el) {
    return undefined;
  }

  const viewPortWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const viewPortHeight =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const rect = el.getBoundingClientRect();

  if (rect) {
    const { top, bottom, left, right } = rect;
    return bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0;
  }

  return false;
}

function useInViewport(target: BasicTarget): InViewport {
  const [inViewPort, setInViewport] = useState<InViewport>(() => {
    if (!inBrowser || !window.IntersectionObserver) return true;
    const el = getTargetElement(target);
    return isInViewPort(el as HTMLElement);
  });

  useEffect(() => {
    const el = getTargetElement(target);
    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!el || !inBrowser || !window.IntersectionObserver) {
      return () => {};
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.some((entry) => {
          if (entry.intersectionRatio > 0) {
            setInViewport(true);
            observer.disconnect();
            return true;
          }
          return false;
        });
      },
      {
        threshold: [0.0001],
      },
    );

    observer.observe(el as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return inViewPort;
}

export default useInViewport;

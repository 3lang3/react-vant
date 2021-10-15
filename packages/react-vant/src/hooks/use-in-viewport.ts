import { useEffect, useState } from 'react';
import { inBrowser } from '../utils';
import { getTargetElement, BasicTarget } from '../utils/dom/getTargetElement';

type InViewport = boolean | undefined;

function isInViewPort(el: HTMLElement, viewPortWidth: number, viewPortHeight: number): InViewport {
  if (!el) {
    return undefined;
  }

  const rect = el.getBoundingClientRect();

  if (rect) {
    const { top, bottom, left, right } = rect;
    return bottom > 0 && top <= viewPortHeight && left <= viewPortWidth && right > 0;
  }

  return false;
}

function useInViewport(target: BasicTarget): InViewport {
  const viewPortWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const viewPortHeight =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  const [inViewPort, setInViewport] = useState<InViewport>(() => {
    if (!inBrowser || !window.IntersectionObserver) return true;
    const el = getTargetElement(target);
    return isInViewPort(el as HTMLElement, viewPortWidth, viewPortHeight);
  });

  useEffect(() => {
    const el = getTargetElement(target);
    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!el || !inBrowser || !window.IntersectionObserver) {
      return () => {};
    }

    const observer = new IntersectionObserver((entries) => {
      entries.some((entry) => {
        if (entry.intersectionRatio > 0 && entry.isIntersecting) {
          setInViewport(true);
          return true;
        }
        return false;
      });
    });

    observer.observe(el as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return inViewPort;
}

export default useInViewport;

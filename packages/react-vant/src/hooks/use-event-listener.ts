/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { inBrowser } from '../utils';
import { BasicTarget, getTargetElement, TargetElement } from '../utils/dom/getTargetElement';

// https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#使用_passive_改善的滚屏性能
let supportsPassive = false;
if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null, opts);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

type Target = BasicTarget<TargetElement>;

export type UseEventListenerOptions = {
  target?: Target;
  capture?: boolean;
  passive?: boolean;
  depends?: Array<unknown>;
};

function useEventListener(
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {},
): void {
  if (!inBrowser) {
    return;
  }
  const { target = window, passive = false, capture = false, depends = [] } = options;
  let attached: boolean;

  const add = () => {
    const element = getTargetElement(target);

    if (element && !attached) {
      element.addEventListener(type, listener, supportsPassive ? { capture, passive } : capture);
      attached = true;
    }
  };

  const remove = () => {
    const element = getTargetElement(target);

    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };

  // https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
  useEffect(() => {
    add();
    return () => remove();
  }, [target, ...depends]);
}

export default useEventListener;

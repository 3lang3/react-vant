/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
let count = 0;

const CLASSNAME = 'rv-overflow-hidden';

export interface Action {
  lock: () => void;
  unlock: () => void;
}

function useLockScroll(shouldLock: () => boolean) {
  const lock = () => {
    if (shouldLock()) {
      if (!count) {
        document.body.classList.add(CLASSNAME);
      }
      count += 1;
    }
  };

  const unlock = () => {
    if (shouldLock() && count) {
      count -= 1;
      if (!count) {
        document.body.classList.remove(CLASSNAME);
      }
    }
  };

  return [lock, unlock];
}

export default useLockScroll;

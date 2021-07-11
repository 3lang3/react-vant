let lockCount = 0;

export function lockClick(lock: boolean): void {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('rk-toast--unclickable');
    }

    lockCount += 1;
  } else if (lockCount) {
    lockCount -= 1;

    if (!lockCount) {
      document.body.classList.remove('rk-toast--unclickable');
    }
  }
}

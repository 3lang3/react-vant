
export function throttle(fn: () => void, delay: number): () => void {
  let timeout: number;
  let called = false;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay) as unknown as number;
    }
  };
}

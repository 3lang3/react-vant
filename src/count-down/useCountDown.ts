import { useMemo, useRef, useState } from 'react';
import { inBrowser } from '../utils';
import { CurrentTime, UseCountDownOptions } from './PropsType';

const root = (inBrowser ? window : global) as unknown as Window;

let prev = Date.now();

function rafPolyfill(fn: FrameRequestCallback): number {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

function raf(fn: FrameRequestCallback): number {
  const requestAnimationFrame = root.requestAnimationFrame || rafPolyfill;
  return requestAnimationFrame.call(root, fn);
}

function cancelRaf(id: number) {
  const cancelAnimationFrame = root.cancelAnimationFrame || root.clearTimeout;
  cancelAnimationFrame.call(root, id);
}

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function parseTime(time: number): CurrentTime {
  const days = Math.floor(time / DAY);
  const hours = Math.floor((time % DAY) / HOUR);
  const minutes = Math.floor((time % HOUR) / MINUTE);
  const seconds = Math.floor((time % MINUTE) / SECOND);
  const milliseconds = Math.floor(time % SECOND);

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

function isSameSecond(time1: number, time2: number): boolean {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

export function useCountDown(options: UseCountDownOptions) {
  const rafId = useRef(0);
  const endTime = useRef(0);
  const counting = useRef(false);
  // const deactivated = useRef(false);

  const [remain, updateRemain] = useState(() => options.time);
  const current = useMemo(() => parseTime(remain), [remain]);

  const pause = () => {
    counting.current = false;
    cancelRaf(rafId.current);
  };

  const getCurrentRemain = () => Math.max(endTime.current - Date.now(), 0);

  const setRemain = (value: number) => {
    updateRemain(value);
    options.onChange?.(current);

    if (value === 0) {
      pause();
      options.onFinish?.();
    }
  };

  const microTick = () => {
    rafId.current = raf(() => {
      // in case of call reset immediately after finish
      if (counting.current) {
        setRemain(getCurrentRemain());

        if (remain > 0) {
          microTick();
        }
      }
    });
  };

  const macroTick = () => {
    rafId.current = raf(() => {
      // in case of call reset immediately after finish
      if (counting.current) {
        const remainRemain = getCurrentRemain();
        if (!isSameSecond(remainRemain, remain) || remainRemain === 0) {
          setRemain(remainRemain);
        }
        if (remain > 0) {
          macroTick();
        }
      }
    });
  };

  const tick = () => {
    // should not start counting in server
    // see: https://github.com/youzan/vant/issues/7807
    if (!inBrowser) {
      return;
    }

    if (options.millisecond) {
      microTick();
    } else {
      macroTick();
    }
  };

  const start = () => {
    if (!counting.current) {
      endTime.current = Date.now() + remain;
      counting.current = true;
      tick();
    }
  };

  const reset = (totalTime: number = options.time) => {
    pause();
    updateRemain(totalTime);
  };

  return {
    start,
    pause,
    reset,
    current,
  };
}

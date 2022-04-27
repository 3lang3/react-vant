import { useEffect, useMemo, useState, useRef } from 'react';
import { inBrowser } from '../utils';
import { cancelRaf, raf } from '../utils/raf';

export type CurrentTime = {
  /** 剩余总时间,单位毫秒 */
  total: number;
  /** 剩余天数	 */
  days: number;
  /** 剩余小时	 */
  hours: number;
  /** 剩余分钟	 */
  minutes: number;
  /** 剩余秒数	 */
  seconds: number;
  /** 剩余毫秒	 */
  milliseconds: number;
};

export type UseCountDownOptions = {
  /** 倒计时时长，单位毫秒 */
  time: number;
  /** 是否开启毫秒级渲染 */
  millisecond?: boolean;
  /** 是否自动开始倒计时 */
  autostart?: boolean;
  /** 倒计时改变时触发的回调函数 */
  onChange?: (current: CurrentTime) => void;
  /** 倒计时结束时触发的回调函数 */
  onFinish?: () => void;
};

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

export default function useCountDown(options: UseCountDownOptions) {
  const rafId = useRef(0);
  const endTime = useRef(0);
  const counting = useRef(false);

  const [remain, updateRemain] = useState(() => options.time);
  const remainRef = useRef(0);
  const current = useMemo(() => parseTime(remain), [remain]);

  remainRef.current = remain;

  const pause = () => {
    counting.current = false;
    cancelRaf(rafId.current);
  };

  const getCurrentRemain = () => Math.max(endTime.current - Date.now(), 0);

  const setRemain = (value: number) => {
    remainRef.current = value;
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

        if (remainRef.current > 0) {
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
        if (!isSameSecond(remainRemain, remainRef.current) || remainRemain === 0) {
          setRemain(remainRemain);
        }
        if (remainRef.current > 0) {
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
      endTime.current = Date.now() + remainRef.current;
      counting.current = true;
      tick();
    }
  };

  const reset = (totalTime: number = options.time) => {
    pause();
    remainRef.current = totalTime;
    updateRemain(totalTime);
  };

  useEffect(() => {
    if (options.autostart) {
      start();
    }
  }, []);

  return {
    start,
    pause,
    reset,
    current,
  } as const;
}

import React, { forwardRef, useContext, useEffect, useImperativeHandle, useMemo } from 'react';
import cls from 'clsx';
import { CountDownProps, CountDownInstance } from './PropsType';
import { noop } from '../utils';
import useCountDown from '../hooks/use-count-down';
import { parseFormat } from './utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const CountDown = forwardRef<CountDownInstance, CountDownProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('count-down', prefixCls);

  const { start, pause, reset, current } = useCountDown({
    time: +props.time,
    millisecond: props.millisecond,
    onChange: props.onChange,
    onFinish: props.onFinish,
  });

  const timeText = useMemo(() => parseFormat(props.format, current), [current]);

  const resetTime = () => {
    reset(+props.time);

    if (props.autoStart) {
      start();
    }
  };

  useEffect(() => {
    resetTime();

    return () => {
      pause();
    };
  }, [props.time]);

  useImperativeHandle(ref, () => ({
    start,
    pause,
    reset: resetTime,
  }));

  return (
    <div className={cls(props.className, bem())} style={props.style}>
      {props.children ? props.children(current) : timeText}
    </div>
  );
});

CountDown.defaultProps = {
  autoStart: true,
  time: 0,
  format: 'HH:mm:ss',
  onChange: noop,
  onFinish: noop,
};

export default CountDown;

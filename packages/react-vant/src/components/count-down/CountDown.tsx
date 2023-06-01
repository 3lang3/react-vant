import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react'
import cls from 'clsx'
import { CountDownProps, CountDownInstance } from './PropsType'
import { createNamespace, noop } from '../utils'
import useCountDown from '../hooks/use-count-down'
import { parseFormat } from './utils'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('count-down')

const CountDown = forwardRef<CountDownInstance, CountDownProps>((p, ref) => {
  const props = mergeProps(p, {
    autoStart: true,
    time: 0,
    format: 'HH:mm:ss',
    onChange: noop,
    onFinish: noop,
  })
  const { start, pause, reset, current } = useCountDown({
    time: +props.time,
    millisecond: props.millisecond,
    onChange: props.onChange,
    onFinish: props.onFinish,
  })

  const timeText = useMemo(() => parseFormat(props.format, current), [current])

  const resetTime = () => {
    reset(+props.time)

    if (props.autoStart) {
      start()
    }
  }

  useEffect(() => {
    resetTime()

    return () => {
      pause()
    }
  }, [props.time])

  useImperativeHandle(ref, () => ({
    start,
    pause,
    reset: resetTime,
  }))

  return (
    <div className={cls(props.className, bem())} style={props.style}>
      {props.children ? props.children(current) : timeText}
    </div>
  )
})

export default CountDown

import { useCallback } from 'react'
import { useIsomorphicLayoutEffect, useSetState } from '../hooks'
import { unitToPx } from '../utils'
import { raf } from '../utils/raf'
import { FloatingBallProps } from './PropsType'

type Direction = '' | 'vertical' | 'horizontal'

function getDirection(x: number, y: number) {
  if (x > y) {
    return 'horizontal'
  }
  if (y > x) {
    return 'vertical'
  }
  return ''
}

const INITIAL_STATE = {
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  offsetX: 0,
  offsetY: 0,
  _pointX: 0,
  _pointY: 0,
  /** 初始化偏移量计算渲染是否完成 */
  ready: false,
  direction: '' as Direction,
}

type UseFloatingTouchProps = {
  /** 目标dom实例 */
  target?: HTMLElement
  /** 初始化偏移量 */
  offset?: FloatingBallProps['offset']
  /** 是否开始屏幕边界 */
  boundary?: boolean
}

const useFloatingTouch = (props?: UseFloatingTouchProps) => {
  const { boundary = true } = props
  const [state, update] = useSetState(INITIAL_STATE)

  useIsomorphicLayoutEffect(() => {
    if (!props.target) return
    // Fill the initial offset state
    const rect = props.target.getBoundingClientRect()
    const { width, height } = rect
    const offset = Object.entries(props.offset).reduce((a, [k, v]) => {
      let px = unitToPx(v)
      let axis = 'deltaY'
      if (k === 'left') px = window.innerWidth - px - width
      if (k === 'top') px = window.innerHeight - px - height
      if (k === 'left' || k === 'right') axis = 'deltaX'
      // 右下角为坐标原点 取反值
      a[axis] = -px
      return a
    }, {})
    update({ ...offset })
    raf(() => {
      update({ ready: true })
    })
  }, [props.target])

  const getBound = useCallback<() => DOMRect>(() => {
    if (!props.target) return {} as DOMRect
    return props.target.getBoundingClientRect()
  }, [props.target])

  const isVertical = useCallback(
    () => state.direction === 'vertical',
    [state.direction]
  )
  const isHorizontal = useCallback(
    () => state.direction === 'horizontal',
    [state.direction]
  )

  const reset = () => {
    update(INITIAL_STATE)
  }

  const start = ((event: TouchEvent) => {
    const rect = getBound()
    update(
      v =>
        ({
          startX: event.touches[0].clientX - v.deltaX,
          startY: event.touches[0].clientY - v.deltaY,
          _pointX: event.touches[0].clientX - rect.left,
          _pointY: event.touches[0].clientY - rect.top,
        } as typeof state)
    )
  }) as EventListener

  const move = ((event: TouchEvent) => {
    const touch = event.touches[0]
    const rect = getBound()
    update(value => {
      // Fix: Safari back will set clientX to negative number
      const newState = { ...value } as typeof state
      newState.deltaX = touch.clientX - newState.startX
      if (boundary && touch.clientX - newState._pointX <= 0)
        newState.deltaX = -window.innerWidth + rect.width
      if (
        boundary &&
        touch.clientX - newState._pointX >= window.innerWidth - rect.width
      )
        newState.deltaX = 0

      newState.deltaY = touch.clientY - newState.startY
      if (boundary && touch.clientY - newState._pointY <= 0)
        newState.deltaY = -window.innerHeight + rect.height
      if (
        boundary &&
        touch.clientY - newState._pointY >= window.innerHeight - rect.height
      )
        newState.deltaY = 0

      newState.offsetX = Math.abs(newState.deltaX)
      newState.offsetY = Math.abs(newState.deltaY)

      // lock direction when distance is greater than a certain value
      const LOCK_DIRECTION_DISTANCE = 10
      if (
        !newState.direction ||
        (newState.offsetX < LOCK_DIRECTION_DISTANCE &&
          newState.offsetY < LOCK_DIRECTION_DISTANCE)
      ) {
        newState.direction = getDirection(newState.offsetX, newState.offsetY)
      }
      return newState
    })
  }) as EventListener

  return {
    ...state,
    update,
    move,
    start,
    reset,
    isVertical,
    isHorizontal,
  }
}

export default useFloatingTouch

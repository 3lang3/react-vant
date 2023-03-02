import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import clsx from 'clsx'
import { createNamespace, preventDefault } from '../utils'
import useEventListener from '../hooks/use-event-listener'
import { useTouch } from '../hooks'
import { FloatingPanelInstance, FloatingPanelProps } from './PropsType'
import { useSpring, animated } from '@react-spring/web'
import { bound } from '../utils/bound'

const [bem] = createNamespace('floating-panel')

const FloatingPanel = forwardRef<FloatingPanelInstance, FloatingPanelProps>(
  (props, ref) => {
    const { className, style, onHeightChange, anchors = [100] } = props
    const sortAnchors = useMemo(() => anchors.sort((a, b) => a - b), [anchors])
    const [minAnchor, maxAnchor] = [
      sortAnchors[0],
      sortAnchors[Math.max(0, sortAnchors.length - 1)],
    ]
    const root = useRef<HTMLDivElement>()
    const header = useRef<HTMLDivElement>()
    const body = useRef<HTMLDivElement>()
    const dragging = useRef(false)
    const draggingStartAt = useRef<number>(null)
    const touch = useTouch()

    useImperativeHandle(ref, () => ({
      moveTo: height => api.start({ visibleH: height }),
    }))

    const [{ visibleH }, api] = useSpring(
      () => ({
        visibleH: minAnchor,
        config: { tension: 300 },
        onChange: () => onHeightChange?.(visibleH.get()),
      }),
      [minAnchor]
    )

    const onTouchStart: EventListener = event => {
      touch.start(event)
      draggingStartAt.current = visibleH.get()
      dragging.current = true
    }

    const onTouchMove: EventListener = event => {
      if (!body.current || !header.current) return
      touch.move(event)
      if (touch.firstMove.current && touch.isVertical()) {
        const bodyEL = body.current
        if (
          // attempt scroll at max anchor
          (touch.deltaY.current < 0 &&
            visibleH.goal >= maxAnchor &&
            bodyEL.offsetHeight < bodyEL.scrollHeight &&
            !(bodyEL.scrollTop + bodyEL.offsetHeight >= bodyEL.scrollHeight)) ||
          // attempt scroll back to top at max anchor
          (touch.deltaY.current > 0 && bodyEL.scrollTop > 0)
        ) {
          dragging.current = false
          return
        }
      }
      if (event.target === header.current) dragging.current = true
      if (!dragging.current) return
      preventDefault(event, true)
      api.start({
        visibleH: bound(
          draggingStartAt.current + -touch.deltaY.current,
          minAnchor,
          maxAnchor
        ),
      })
    }

    const onTouchEnd: EventListener = () => {
      const memoDraggingStartAt = draggingStartAt.current
      dragging.current = false
      draggingStartAt.current = null
      touch.reset()
      if (memoDraggingStartAt) {
        const nearestAnchor = findNearestAnchor(sortAnchors, visibleH.get())
        api.start({
          visibleH: nearestAnchor,
          from: { visibleH: visibleH.get() },
        })
      }
    }

    useEventListener('touchstart', onTouchStart, { target: root })
    useEventListener('touchmove', onTouchMove, { target: root })
    useEventListener('touchend', onTouchEnd, { target: root })

    return (
      <animated.div
        ref={root}
        className={clsx(bem(), className)}
        style={{
          height: maxAnchor,
          transform: visibleH.to(h => `translateY(calc(100% - ${h}px))`),
          ...style,
        }}
      >
        <div ref={header} className={clsx(bem('header'))}>
          <div className={clsx(bem('thumb'))} />
        </div>
        <animated.div ref={body} className={clsx(bem('body'))}>
          {props.children}
        </animated.div>
      </animated.div>
    )
  }
)

function findNearestAnchor(anchors: number[], target: number) {
  return anchors.reduce((pre, cur) => {
    return Math.abs(target - pre) < Math.abs(target - cur) ? pre : cur
  })
}

export default FloatingPanel

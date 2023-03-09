import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import clsx from 'clsx'
import {
  createNamespace,
  getScrollTop,
  getVisibleHeight,
  preventDefault,
} from '../utils'
import useEventListener from '../hooks/use-event-listener'
import { useTouch } from '../hooks'
import { FloatingPanelInstance, FloatingPanelProps } from './PropsType'
import { useSpring, animated } from '@react-spring/web'
import { bound } from '../utils/bound'

const [bem] = createNamespace('floating-panel')

/** Check if EL is scrolling reach its bottom */
function scrollReachBottom(el: Element) {
  const scrollTop = getScrollTop(el)
  return scrollTop >= el.scrollHeight - getVisibleHeight(el)
}

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
      const [headerEL, bodyEL] = [header.current, body.current]
      touch.move(event)
      if (visibleH.goal >= maxAnchor && bodyEL) {
        if (
          touch.firstMove.current &&
          // try going up to body top
          ((touch.deltaY.current > 0 && getScrollTop(bodyEL) > 0) ||
            // try going down to body bottom
            (touch.deltaY.current < 0 && !scrollReachBottom(bodyEL)))
        ) {
          dragging.current = false
        }
      }
      if (headerEL && headerEL.contains(event.target as Element)) {
        dragging.current = true
      }
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

    useEventListener('touchstart', onTouchStart, {
      target: root,
      passive: false,
    })
    useEventListener('touchmove', onTouchMove, { target: root, passive: false })
    useEventListener('touchend', onTouchEnd, { target: root, passive: false })

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

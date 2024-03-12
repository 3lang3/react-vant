import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import cls from 'clsx'
import {
  SwipeCellInstance,
  SwipeCellPosition,
  SwipeCellProps,
  SwipeCellSide,
} from './PropsType'
import { createNamespace, isDef, preventDefault, range } from '../utils'
import { getRect } from '../hooks/use-rect'
import { callInterceptor } from '../utils/interceptor'
import useClickAway from '../hooks/use-click-away'
import useEventListener from '../hooks/use-event-listener'
import { useTouch } from '../hooks'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('swipe-cell')

const SwipeCell = forwardRef<SwipeCellInstance, SwipeCellProps>(
  (p, instanceRef) => {
    const props = mergeProps(p, {
      name: '',
    })
    const opened = useRef(false)
    const lockClick = useRef(false)
    const startOffset = useRef(0)

    const [state, setState] = useState({
      offset: 0,
      dragging: false,
    })

    const [actionWidth, setActionWidth] = useState({
      left: 0,
      right: 0,
    })

    const root = useRef<HTMLDivElement>()

    const getWidthByNode = (node: Element) => (node ? getRect(node).width : 0)

    const leftRef = useCallback(node => {
      if (node !== null) {
        setActionWidth(v => ({ ...v, left: getWidthByNode(node) }))
      }
    }, [])
    const rightRef = useCallback(node => {
      if (node !== null) {
        setActionWidth(v => ({ ...v, right: getWidthByNode(node) }))
      }
    }, [])

    const touch = useTouch()

    const leftWidth = useMemo(
      () => (isDef(props.leftWidth) ? +props.leftWidth : actionWidth.left),
      [props.leftWidth, actionWidth.left]
    )

    const rightWidth = useMemo(
      () => (isDef(props.rightWidth) ? +props.rightWidth : actionWidth.right),
      [props.rightWidth, actionWidth.right]
    )

    const open = (side: SwipeCellSide) => {
      opened.current = true
      const offset = side === 'left' ? leftWidth : -rightWidth
      props.onOpen?.({ name: props.name, position: side })
      setState(v => ({ ...v, offset }))
    }

    const close = (position: SwipeCellPosition) => {
      if (opened.current) {
        opened.current = false
        props.onClose?.({ name: props.name, position })
      }
      setState(v => ({ ...v, offset: 0 }))
    }

    const toggle = (side: SwipeCellSide) => {
      const offset = Math.abs(state.offset)
      const THRESHOLD = 0.15
      const threshold = opened ? 1 - THRESHOLD : THRESHOLD
      const width = side === 'left' ? leftWidth : rightWidth

      if (width && offset > width * threshold) {
        open(side)
      } else {
        close(side)
      }
    }

    const onTouchStart = event => {
      if (!props.disabled) {
        startOffset.current = state.offset
        touch.start(event)
      }
    }

    const onTouchMove = event => {
      if (props.disabled) {
        return
      }

      touch.move(event)

      if (touch.isHorizontal()) {
        lockClick.current = true
        const newState = { ...state, dragging: true }
        const isEdge =
          !opened.current || touch.deltaX.current * startOffset.current < 0
        if (isEdge) {
          preventDefault(event, props.stopPropagation)
        }

        newState.offset = range(
          touch.deltaX.current + startOffset.current,
          -rightWidth,
          leftWidth
        )

        setState(newState)
      }
    }

    const onTouchEnd = () => {
      if (state.dragging) {
        setState(v => ({ ...v, dragging: false }))
        toggle(state.offset > 0 ? 'left' : 'right')

        // compatible with desktop scenario
        setTimeout(() => {
          lockClick.current = false
        }, 0)
      }
    }

    const onClick = (position: SwipeCellPosition = 'outside') => {
      props.onClick?.(position)

      if (opened.current && !lockClick.current) {
        callInterceptor({
          interceptor: props.beforeClose,
          args: [
            {
              name: props.name,
              position,
            },
          ],
          done: () => close(position),
        })
      }
    }

    const getClickHandler =
      (position: SwipeCellPosition, stop?: boolean) => event => {
        if (stop) {
          event.stopPropagation()
        }
        onClick(position)
      }

    const renderSideContent = (side: SwipeCellSide, measuredRef) => {
      if (props[`${side}Action`]) {
        return (
          <div
            ref={measuredRef}
            className={cls(bem(side))}
            onClick={getClickHandler(side, true)}
          >
            {props[`${side}Action`]}
          </div>
        )
      }
      return null
    }

    useClickAway(root, () => onClick('outside'), 'touchstart')

    useImperativeHandle(instanceRef, () => ({
      open,
      close: () => close('outside'),
    }))

    const wrapperStyle = {
      transform: `translate3d(${state.offset}px, 0, 0)`,
      transitionDuration: state.dragging ? '0s' : '.6s',
    }

    useEventListener('touchmove', onTouchMove as EventListener, {
      target: root.current,
      depends: [touch.deltaX],
    })

    return (
      <div
        ref={root}
        className={cls(bem())}
        onClick={getClickHandler('cell')}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div className={cls(bem('wrapper'))} style={wrapperStyle}>
          {renderSideContent('left', leftRef)}
          {props.children}
          {renderSideContent('right', rightRef)}
        </div>
      </div>
    )
  }
)

export default SwipeCell

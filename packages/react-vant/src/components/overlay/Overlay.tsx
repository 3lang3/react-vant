import React, { CSSProperties, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import clsx from 'clsx'
import { OverlayProps } from './PropsType'
import {
  createNamespace,
  isDef,
  preventDefault,
  withStopPropagation,
} from '../utils'
import { useEventListener } from '../hooks'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('overlay')

const Overlay: React.FC<OverlayProps> = p => {
  const nodeRef = useRef(null)
  const props = mergeProps(p, {
    stopPropagation: ['click'],
    lockScroll: true,
    duration: 300,
  })
  const { visible, duration } = props

  const preventTouchMove = (event: TouchEvent) => {
    if (!props.lockScroll) return
    preventDefault(event, true)
  }

  const renderOverlay = () => {
    const style: CSSProperties = {
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
      touchAction: props.lockScroll && 'none',
      ...props.style,
      ...props.customStyle,
    }

    if (isDef(duration)) {
      style.animationDuration = `${duration}ms`
    }

    return withStopPropagation(
      props.stopPropagation,
      <div
        ref={nodeRef}
        style={style}
        onClick={e => {
          if (e.target === e.currentTarget) {
            props.onClick?.(e)
          }
        }}
        className={clsx(bem(), props.className)}
      >
        {props.children}
      </div>
    )
  }

  useEventListener('touchmove', preventTouchMove, { target: nodeRef })

  return (
    <CSSTransition
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      in={visible}
      timeout={duration}
      classNames='rv-fade'
    >
      {renderOverlay()}
    </CSSTransition>
  )
}

export default Overlay

import React, { useLayoutEffect } from 'react'
import cls from 'clsx'
import { SwiperItemProps, SwiperItemInstance } from './PropsType'
import { createNamespace } from '../utils'
import { useIsomorphicLayoutEffect, useVisibilityChange } from '../hooks'

const [bem] = createNamespace('swiper-item')

const SwiperItem = React.forwardRef<SwiperItemInstance, SwiperItemProps>(
  (props, ref) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null)
    const getHeight = () => {
      return wrapperRef.current?.clientHeight
    }

    React.useImperativeHandle(ref, () => ({
      getHeight,
      self: wrapperRef.current,
    }))

    const [show] = useVisibilityChange(wrapperRef)

    console.log(show)
    return (
      <div
        ref={wrapperRef}
        className={cls(
          props.className,
          bem({
            hidden: show === false,
          })
        )}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </div>
    )
  }
)

export default SwiperItem

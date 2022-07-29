import React from 'react'
import cls from 'clsx'
import { SwiperItemProps, SwiperItemInstance } from './PropsType'
import { createNamespace } from '../utils'
import { useInViewport } from '../hooks'

const [bem] = createNamespace('swiper-item')

const SwiperItem = React.forwardRef<SwiperItemInstance, SwiperItemProps>(
  (props, ref) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle(ref, () => ({
      self: wrapperRef.current,
    }))

    const [show] = useInViewport(wrapperRef, {
      rootMargin: '-0.1px',
      threshold: 0,
      root: () => props.trackRef?.current,
    })

    return (
      <div
        ref={wrapperRef}
        className={cls(
          props.className,
          bem({
            hidden: props.autoHeight && show === false,
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

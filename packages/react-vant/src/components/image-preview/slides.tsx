import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDrag } from '@use-gesture/react'
import { useSpring, animated } from '@react-spring/web'
import { Slide } from './slide'
import { bound } from '../utils/bound'
import { createNamespace, unitToPx } from '../utils'
import clsx from 'clsx'
import { useUpdateEffect } from '../hooks'

export type SlidesType = {
  images: string[]
  onTap: () => void
  maxZoom: number
  defaultIndex: number
  onIndexChange?: (index: number) => void
}

export type SlidesRef = {
  swipeTo: (index: number, immediate?: boolean) => void
}

const [bem] = createNamespace('image-preview')

export const Slides = forwardRef<SlidesRef, SlidesType>((props, ref) => {
  const slideWidth = window.innerWidth + unitToPx(16)
  const [{ x }, api] = useSpring(() => ({
    x: props.defaultIndex * slideWidth,
    config: { tension: 250, clamp: true },
  }))

  const count = props.images.length

  useUpdateEffect(() => {
    swipeTo(props.defaultIndex, true)
  }, [props.defaultIndex])

  function swipeTo(index: number, immediate = false) {
    const i = bound(index, 0, count - 1)
    props.onIndexChange?.(i)
    api.start({
      x: i * slideWidth,
      immediate,
    })
  }

  useImperativeHandle(ref, () => ({
    swipeTo,
  }))

  const dragLockRef = useRef(false)
  const bind = useDrag(
    state => {
      if (dragLockRef.current) return
      const [offsetX] = state.offset
      if (state.last) {
        const minIndex = Math.floor(offsetX / slideWidth)
        const maxIndex = minIndex + 1
        const velocityOffset =
          Math.min(state.velocity[0] * 2000, slideWidth) * state.direction[0]
        swipeTo(
          bound(
            Math.round((offsetX + velocityOffset) / slideWidth),
            minIndex,
            maxIndex
          )
        )
      } else {
        api.start({
          x: offsetX,
          immediate: true,
        })
      }
    },
    {
      transform: ([x, y]) => [-x, y],
      from: () => [x.get(), 0],
      bounds: () => {
        return {
          left: 0,
          right: (count - 1) * slideWidth,
        }
      },
      rubberband: true,
      axis: 'x',
      pointer: { touch: true },
    }
  )

  return (
    <div className={clsx(bem('slides'))} {...bind()}>
      <animated.div
        className={clsx(bem('slides-inner'))}
        style={{ x: x.to(x => -x) }}
      >
        {props.images.map((image, idx) => (
          <Slide
            key={`${image}${idx}`}
            image={image}
            onTap={props.onTap}
            maxZoom={props.maxZoom}
            onZoomChange={zoom => {
              if (zoom !== 1) {
                const index: number = Math.round(x.get() / slideWidth)
                api.start({
                  x: index * slideWidth,
                })
              }
            }}
            dragLockRef={dragLockRef}
          />
        ))}
      </animated.div>
    </div>
  )
})

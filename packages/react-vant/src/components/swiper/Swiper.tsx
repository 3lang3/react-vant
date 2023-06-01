import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import cls from 'clsx'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import SwiperItem from './SwiperItem'
import { SwiperProps, SwiperInstance } from './PropsType'
import useRefs from '../hooks/use-refs'
import useRefState from '../hooks/use-ref-state'
import { bound } from '../utils/bound'
import { devWarning } from '../utils/dev-log'
import { createNamespace, noop } from '../utils'
import SwiperPagIndicator from './SwiperPagIndicator'
import { useIsomorphicLayoutEffect, useUpdateEffect } from '../hooks'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('swiper')

const Swiper = forwardRef<SwiperInstance, SwiperProps>((p, ref) => {
  const props = mergeProps(p, {
    initialSwipe: 0,
    loop: true,
    touchable: true,
    enabled: true,
    rubberband: true,
    autoplay: false,
    slideSize: 100,
    trackOffset: 0,
    stuckAtBoundary: false,
    preventScroll: true,
  })
  const { loop: outerLoop, autoplay, vertical, duration, autoHeight } = props

  const axis = vertical ? 'y' : 'x'
  const slideRatio = props.slideSize / 100
  const offsetRatio = props.trackOffset / 100

  const { validChildren, count } = useMemo(() => {
    let innerCount = 0
    const innerValidChildren = React.Children.map(props.children, child => {
      if (!React.isValidElement(child)) return null
      if (child.type !== SwiperItem) {
        devWarning(
          'Swiper',
          'The children of `Swiper` must be `Swiper.Item` components.'
        )
        return null
      }
      innerCount++
      return child
    })
    return {
      validChildren: innerValidChildren,
      count: innerCount,
    }
  }, [props.children])

  const trackRef = useRef<HTMLDivElement>(null)
  const [childrenRefs, setChildrenRefs] = useRefs()
  const [enabled, setEnabled] = useState<boolean>(() => props.enabled)
  const [current, setCurrent] = useState(props.initialSwipe)
  const [dragging, setDragging, draggingRef] = useRefState(false)

  const computedStyle = useMemo(() => {
    return {
      [`--rv-swipe-slide-size`]: `${props.slideSize}%`,
      [`--rv-swipe-track-offset`]: `${props.trackOffset}%`,
      ...props.style,
    }
  }, [props.slideSize, props.trackOffset, props.style])

  const loop = useMemo(() => {
    if (slideRatio * (count - 1) < 1) return false
    return outerLoop
  }, [count, outerLoop, slideRatio])

  const getSlidePixels = () => {
    const track = trackRef.current
    if (!track) return 0
    const trackPixels = vertical ? track.offsetHeight : track.offsetWidth
    return (trackPixels * props.slideSize) / 100
  }

  const boundIndex = (cur: number) => {
    let min = 0
    let max = count - 1
    if (props.stuckAtBoundary) {
      min += (1 - slideRatio - offsetRatio) / slideRatio
      max -= (1 - slideRatio - offsetRatio) / slideRatio
    }
    return bound(cur, min, max)
  }

  const [{ position }, api] = useSpring(
    () => ({
      position: boundIndex(current) * 100,
      config: {
        tension: 200,
        friction: 30,
        duration,
      },
      onRest: () => {
        if (draggingRef.current) return
        if (!loop) return
        const rawX = position.get()
        const totalWidth = 100 * count
        const standardPosition = modulus(rawX, totalWidth)
        if (standardPosition === rawX) return
        api.start({
          position: standardPosition,
          immediate: true,
        })
      },
    }),
    [count]
  )

  const bind = useDrag(
    state => {
      const slidePixels = getSlidePixels()
      if (!slidePixels) return
      if (
        !props.preventScroll &&
        isScrollTarget(state.target as HTMLElement, childrenRefs[current]?.self)
      ) {
        return
      }

      const paramIndex = vertical ? 1 : 0
      const offset = state.offset[paramIndex]
      const direction = state.direction[paramIndex]
      const velocity = state.velocity[paramIndex]
      setDragging(true)
      if (!state.last) {
        api.start({
          position: (offset * 100) / slidePixels,
          immediate: true,
        })
      } else {
        const index = Math.round(
          (offset + Math.min(velocity * 2000, slidePixels) * direction) /
            slidePixels
        )
        swipeTo(index)
        window.setTimeout(() => {
          setDragging(false)
        })
      }
    },
    {
      enabled,
      transform: ([x, y]) => [-x, -y],
      from: () => {
        const slidePixels = getSlidePixels()
        return [
          (position.get() / 100) * slidePixels,
          (position.get() / 100) * slidePixels,
        ]
      },
      bounds: () => {
        if (loop) return {}
        const slidePixels = getSlidePixels()
        const lowerBound = boundIndex(0) * slidePixels
        const upperBound = boundIndex(count - 1) * slidePixels
        return vertical
          ? {
              top: lowerBound,
              bottom: upperBound,
            }
          : {
              left: lowerBound,
              right: upperBound,
            }
      },
      rubberband: props.rubberband,
      axis,
      preventScroll: axis === 'x' ? props.preventScroll : false,
      pointer: {
        touch: true,
      },
    }
  )

  const renderIndicator = () => {
    if (props.indicator === undefined || props.indicator === true) {
      return (
        <div className={cls(bem('indicator', { vertical }))}>
          <SwiperPagIndicator
            {...props.indicatorProps}
            vertical={vertical}
            total={count}
            current={current}
          />
        </div>
      )
    }
    if (typeof props.indicator === 'function') {
      return props.indicator(count, current)
    }
    return null
  }

  function swipeTo(index: number, immediate = false) {
    const roundedIndex = Math.round(index)
    const targetIndex = loop
      ? modulus(roundedIndex, count)
      : bound(roundedIndex, 0, count - 1)
    setCurrent(targetIndex)
    api.start({
      position: (loop ? roundedIndex : boundIndex(roundedIndex)) * 100,
      immediate,
    })
  }

  const swipeNext = () => {
    swipeTo(Math.round(position.get() / 100) + 1)
  }

  const swipePrev = () => {
    swipeTo(Math.round(position.get() / 100) - 1)
  }

  useImperativeHandle(ref, () => ({
    activeIndex: current,
    swipeTo,
    swipeNext,
    swipePrev,
    enable: () => {
      setEnabled(true)
    },
    disable: () => {
      setEnabled(false)
    },
  }))

  useIsomorphicLayoutEffect(() => {
    const maxIndex = validChildren.length - 1
    if (current > maxIndex) {
      swipeTo(maxIndex, true)
    }
  })

  useUpdateEffect(() => {
    props.onChange?.(current)
  }, [current])

  useEffect(() => {
    if (!autoplay || dragging) return noop
    const autoplayInterval = typeof autoplay === 'boolean' ? 5000 : autoplay
    const interval = window.setInterval(() => {
      swipeNext()
    }, autoplayInterval)
    return () => {
      window.clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, dragging])

  const renderTrackInner = () => {
    if (loop) {
      return (
        <div
          className={cls(
            bem('track-inner', {
              vertical,
            })
          )}
        >
          {React.Children.map(validChildren, (child, index) => {
            return (
              <animated.div
                className={cls(bem('slide'))}
                style={{
                  [axis]: position.to(pos => {
                    let finalPosition = -pos + index * 100
                    const totalWidth = count * 100
                    const flagWidth = totalWidth / 2
                    finalPosition =
                      modulus(finalPosition + flagWidth, totalWidth) - flagWidth
                    return `${finalPosition}%`
                  }),
                  [vertical ? 'top' : 'left']: `-${index * 100}%`,
                }}
              >
                {React.cloneElement(child, {
                  ref: setChildrenRefs(index),
                  autoHeight,
                  trackRef,
                } as any)}
              </animated.div>
            )
          })}
        </div>
      )
    }
    return (
      <animated.div
        className={cls(bem('track-inner'))}
        style={{
          [axis]: position.to(position => `${-position}%`),
        }}
      >
        {React.Children.map(validChildren, (child, index) => {
          return (
            <div className={cls(bem('slide'))}>
              {React.cloneElement(child, {
                ref: setChildrenRefs(index),
                autoHeight,
              } as any)}
            </div>
          )
        })}
      </animated.div>
    )
  }

  if (count === 0) {
    devWarning('Swiper', '`Swiper` needs at least one child.')
  }

  return (
    <div
      className={cls(props.className, bem({ vertical }))}
      style={computedStyle}
    >
      <div
        ref={trackRef}
        className={cls(
          bem('track', {
            'allow-touch-move': props.touchable,
          })
        )}
        onClickCapture={e => {
          if (draggingRef.current) {
            e.stopPropagation()
          }
        }}
        {...(props.touchable ? bind() : {})}
      >
        {renderTrackInner()}
      </div>
      {renderIndicator()}
    </div>
  )
})

export default Swiper

function modulus(value: number, division: number) {
  const remainder = value % division
  return remainder < 0 ? remainder + division : remainder
}

function isScrollTarget(element: HTMLElement, parent: HTMLElement) {
  if (!parent) return false

  if (
    element.scrollWidth > element.clientWidth ||
    element.scrollHeight > element.clientHeight
  ) {
    return true
  }
  if (element.parentElement && element.parentElement !== parent) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return isScrollTarget(element.parentElement, parent)
  }
  return false
}

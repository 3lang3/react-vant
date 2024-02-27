import React, { useState, useImperativeHandle, forwardRef } from 'react'
import clsx from 'clsx'
import {
  FloatingBallProps,
  FloatingBallInstance,
  AdsorbProps,
} from './PropsType'
import FloatingBallContext from './FloatingBallContext'
import useClickAway from '../hooks/use-click-away'
import FloatingBallItem from './FloatingBallItem'
import {
  useEventListener,
  useIsomorphicLayoutEffect,
  useSetState,
} from '../hooks'
import throttle from '../utils/throttle'
import useFloatingTouch from './useFloatingTouch'
import useMergedState from '../hooks/use-merged-state'
import { raf } from '../utils/raf'
import { createNamespace } from '../utils'
import { mergeProps } from '../utils/get-default-props'

const TOUCH_DURATION = 0
const TRANSITION_DURATION = 300
const DEFAULT_ADSORB = { indent: 0.5, distance: 0 }

const [bem] = createNamespace('floating-ball')

const FloatingBall = forwardRef<FloatingBallInstance, FloatingBallProps>(
  (p, ref) => {
    const props = mergeProps(p, {
      adsorb: DEFAULT_ADSORB,
      draggable: true,
      menu: {},
      offset: {
        right: 0,
        bottom: '30vh',
      },
    })
    const timer = React.useRef(null)
    const [position, setPosition] = useState('bottom right')
    const [container, setContainer] = React.useState<HTMLDivElement>()

    const touch = useFloatingTouch({
      target: container,
      offset: props.offset,
    })

    const [active, updateActive] = useMergedState({
      value: props.menu?.active,
      defaultValue: props.menu?.defaultActive,
    })

    const [state, updateState] = useSetState({
      indenting: false,
      duration: TOUCH_DURATION,
    })

    // 是否处于滚动缩进中
    const isIndenting = state.indenting

    // 是否可拖动
    const isDraggable = event =>
      props.draggable &&
      event.touches.length === 1 &&
      container &&
      !props.disabled

    // 吸附属性
    const adsorb = React.useMemo<AdsorbProps | false>(() => {
      if (typeof props.adsorb === 'boolean') {
        if (!props.adsorb) return false
        return DEFAULT_ADSORB
      }
      return { ...DEFAULT_ADSORB, ...props.adsorb }
    }, [props.adsorb])

    const validMenus = React.useMemo(
      () =>
        props?.menu.items && Array.isArray(props.menu?.items)
          ? props.menu?.items.filter(Boolean).filter((_, i) => i < 5)
          : [],
      [props.menu?.items]
    )

    // 处理菜单
    const renderMenus = React.useCallback(() => {
      if (!validMenus.length) return null
      const [position1, position2] = position.split(' ')
      return (
        <div
          className={clsx(
            bem('menu', {
              [props.menu?.direction]: !!props.menu?.direction,
              [position1]: !!position1,
              [position2]: !!position2,
            }),
            `list-${Math.max(validMenus.length, 5)}`
          )}
        >
          {validMenus.map((cld, i) => (
            <FloatingBallItem key={i}>{cld}</FloatingBallItem>
          ))}
        </div>
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position, props.menu?.direction, validMenus])

    // 更新 menu 的位置
    const checkMenuPosition = () => {
      if (container) {
        const {
          rect: { left, top, width, height },
        } = getSideWithRect()
        const windowW = window.innerWidth
        const windowH = window.innerHeight
        if (left + width / 2 < windowW / 2) {
          position.indexOf('right') >= 0 &&
            setPosition(state => state.replace('right', 'left'))
        } else if (position.indexOf('left') >= 0) {
          setPosition(state => state.replace('left', 'right'))
        }
        if (top + height / 2 < windowH / 2) {
          position.indexOf('bottom') >= 0 &&
            setPosition(state => state.replace('bottom', 'top'))
        } else if (position.indexOf('top') >= 0) {
          setPosition(state => state.replace('top', 'bottom'))
        }
      }
    }

    const innerChange = (value: boolean) => {
      updateActive(value)
      props.menu?.onChange?.(value)
    }

    // 悬浮球点击事件
    const handleBaseClick = () => {
      // 是否禁用
      if (props.disabled || !validMenus.length) return
      innerChange(!active)
    }

    // 获取容器在屏幕的哪一侧
    const getSideWithRect = () => {
      const rect = container.getBoundingClientRect()
      const side =
        rect.left + rect.width / 2 > window.innerWidth / 2 ? 'right' : 'left'
      return { rect, side }
    }

    // 近边吸附
    const checkPosition = () => {
      const { side, rect } = getSideWithRect()
      if (adsorb) {
        const { distance } = adsorb
        const isRightSide = side === 'right'
        const x = isRightSide
          ? -distance
          : -(window.innerWidth - rect.width) + +distance
        updateState({ duration: TRANSITION_DURATION })
        touch.update({ deltaX: x })
      }
    }

    const onTouchStart = event => {
      if (!isDraggable(event) || isIndenting) return
      updateState({ duration: TOUCH_DURATION })
      touch.start(event)
    }

    const onTouchMove = event => {
      if (!isDraggable(event) || isIndenting) return
      touch.move(event)
      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault()
      }
      if (active) innerChange(false)
    }

    const onTouchEnd = () => {
      if (isIndenting) return
      checkPosition()
      checkMenuPosition()
    }

    useIsomorphicLayoutEffect(() => {
      if (!active || !touch.ready) return
      checkMenuPosition()
    }, [touch.ready])

    useEventListener('touchmove', onTouchMove, {
      target: container,
      depends: [
        container,
        touch.deltaX,
        touch.deltaY,
        props.disabled,
        props.draggable,
      ],
    })

    // 点击除悬浮球之外的地方自动收回悬浮球
    useClickAway(container, () => {
      innerChange(false)
    })

    // 实例方法
    useImperativeHandle(ref, () => ({
      open: () => {
        if (!validMenus.length) return
        // viod click away mix
        raf(() => innerChange(true))
      },
      close: () => {
        if (!validMenus.length) return
        // viod click away mix
        raf(() => innerChange(false))
      },
    }))

    // 滚动时缩进
    useIsomorphicLayoutEffect(() => {
      if (props.disabled || !adsorb || !touch.ready) return
      const onScroll = () => {
        const { side, rect } = getSideWithRect()
        const { indent, distance } = adsorb
        const isRightSide = side === 'right'
        const indentPx = rect.width * (isRightSide ? +indent : 1 - +indent)
        const offsetX = isRightSide
          ? +indentPx
          : -(window.innerWidth - indentPx)
        updateState({
          indenting: true,
          duration: TRANSITION_DURATION,
        })
        innerChange(false)
        touch.update({ deltaX: offsetX })
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => {
          const x = isRightSide
            ? -distance
            : -(window.innerWidth - rect.width) + +distance
          updateState({ indenting: false })
          touch.update({ deltaX: x })
        }, 600)
      }
      const handle = throttle(() => raf(onScroll), 300)
      window.addEventListener('scroll', handle)
      return () => window.removeEventListener('scroll', handle)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [touch.ready, container, adsorb, props.disabled])

    const indentClassName = React.useMemo(() => {
      if (!adsorb) return ''
      if (state.indenting) return adsorb.indentClassName
      return ''
    }, [adsorb, state.indenting])

    const trackStyle = React.useMemo(
      () => ({
        ...props.style,
        transitionDuration: `${state.duration}ms`,
        transform: `translate3d(${touch.deltaX}px,${touch.deltaY}px, 0)`,
      }),
      [props.style, state.duration, touch.deltaX, touch.deltaY]
    )

    return (
      <FloatingBallContext.Provider
        value={{
          close: () => {
            const closeable = props.menu?.itemClickClose ?? true
            if (closeable) innerChange(false)
          },
        }}
      >
        <div
          className={clsx(props.className, indentClassName, bem({ active }))}
          style={trackStyle}
          ref={setContainer}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
        >
          {renderMenus()}
          <div
            className={clsx(
              bem('base', {
                [props.disabledClassName]: props.disabled,
              })
            )}
            onClick={handleBaseClick}
          >
            {typeof props.children === 'function'
              ? props.children({ active, indenting: state.indenting })
              : props.children}
          </div>
        </div>
      </FloatingBallContext.Provider>
    )
  }
)

export default FloatingBall

import React, {
  useMemo,
  useRef,
  useContext,
  forwardRef,
  memo,
  useImperativeHandle,
} from 'react'
import clsx from 'clsx'
import { PickerColumnOption, PickerColumnProps } from './PropsType'
import { createNamespace, range, unitToPx } from '../utils'
import { useIsomorphicLayoutEffect, useSetState, useTouch } from '../hooks'
import ConfigProviderContext from '../config-provider/ConfigProviderContext'

const DEFAULT_DURATION = 200

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300
const MOMENTUM_LIMIT_DISTANCE = 15

function getElementTranslateY(element) {
  const style = window.getComputedStyle(element)
  const transform = style.transform || style.webkitTransform
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5]

  return Number(translateY)
}

const [bem] = createNamespace('picker-column')

const PickerColumn = memo<
  PickerColumnProps & { ref?: React.ForwardedRef<{ stopMomentum: () => void }> }
>(
  forwardRef<{ stopMomentum: () => void }, PickerColumnProps>((props, ref) => {
    const { locale } = useContext(ConfigProviderContext)

    const {
      valueKey,
      textKey,
      itemHeight: _itemHeight,
      visibleItemCount,
      placeholder,
      value,
    } = props

    const itemHeight = useMemo(() => unitToPx(_itemHeight), [_itemHeight])

    const options = useMemo(() => {
      if (Array.isArray(props.options) && !props.options.length) return []
      if (placeholder) {
        const DEFAULT_OPTION = {
          [valueKey]: undefined,
          [textKey]:
            placeholder === true ? locale.vanPicker.select : placeholder,
        }
        return [DEFAULT_OPTION, ...props.options]
      }
      return props.options
    }, [props.options])

    const wrapper = useRef(null)
    const moving = useRef(false)
    const startOffset = useRef(0)
    const transitionEndTrigger = useRef(null)
    const touchStartTime = useRef(0)
    const momentumOffset = useRef(0)

    const [state, updateState, stateRef] = useSetState({
      offset: 0,
      duration: 0,
    })

    const touch = useTouch()

    const baseOffset = useMemo(() => {
      // 默认转入第一个选项的位置
      return (itemHeight * (+visibleItemCount - 1)) / 2
    }, [itemHeight, visibleItemCount])

    const adjustIndex = (index: number) => {
      index = range(index, 0, options.length)

      for (let i = index; i < options.length; i += 1) {
        if (!options[i]?.disabled) return i
      }
      for (let i = index - 1; i >= 0; i -= 1) {
        if (!options[i]?.disabled) return i
      }

      return null
    }

    const onSelect = (val: PickerColumnOption) => {
      props.onSelect(val, props.index)
    }

    const setIndex = (index: number) => {
      index = adjustIndex(index) || 0
      const offset = -index * itemHeight
      const trigger = () => {
        if (options[index]?.[valueKey] !== value) {
          onSelect(options[index])
        }
      }

      // trigger the change event after transitionend when moving
      if (moving.current && offset !== stateRef.current.offset) {
        transitionEndTrigger.current = trigger
      } else {
        trigger()
      }
      updateState({ offset })
    }

    const animate = (index: number) => {
      index = adjustIndex(index) || 0
      const offset = -index * itemHeight
      updateState({ offset })
    }

    useIsomorphicLayoutEffect(() => {
      if (options.length === 0) {
        if (value !== undefined) {
          onSelect(undefined)
        }
      } else {
        let targetIndex = options.findIndex(item => item[valueKey] === value)
        if (targetIndex < 0) {
          targetIndex = 0
          onSelect(options[0])
        }
        animate(targetIndex)
      }
    }, [value, JSON.stringify(options)])

    const onClickItem = (index: number) => {
      if (moving.current || props.readOnly) {
        return
      }
      transitionEndTrigger.current = null
      updateState({ duration: DEFAULT_DURATION })
      setIndex(index)
    }

    const getIndexByOffset = (offset: number) =>
      range(Math.round(-offset / itemHeight), 0, options.length - 1)

    const momentum = (distance: number, _duration: number) => {
      const speed = Math.abs(distance / _duration)

      distance =
        stateRef.current.offset + (speed / 0.003) * (distance < 0 ? -1 : 1)

      const index = getIndexByOffset(distance)
      updateState({ duration: +props.swipeDuration })
      setIndex(index)
    }

    const stopMomentum = () => {
      moving.current = false
      updateState({ duration: 0 })

      if (transitionEndTrigger.current) {
        transitionEndTrigger.current()
        transitionEndTrigger.current = null
      }
    }

    const onTouchStart = event => {
      if (props.readOnly) {
        return
      }

      touch.start(event)
      let { offset } = state

      if (moving.current) {
        const translateY = getElementTranslateY(wrapper.current)
        offset = Math.min(0, translateY - baseOffset)
        startOffset.current = offset
      } else {
        startOffset.current = offset
      }

      updateState({ duration: 0, offset })
      touchStartTime.current = Date.now()
      momentumOffset.current = startOffset.current
      transitionEndTrigger.current = null
    }

    const onTouchMove = (event: TouchEvent | React.TouchEvent) => {
      if (props.readOnly) {
        return
      }

      touch.move(event as TouchEvent)

      if (touch.isVertical()) {
        moving.current = true
      }

      const offset = range(
        startOffset.current + touch.deltaY.current,
        -(options.length * itemHeight),
        itemHeight
      )

      updateState({
        offset,
      })

      const now = Date.now()
      if (now - touchStartTime.current > MOMENTUM_LIMIT_TIME) {
        touchStartTime.current = now
        momentumOffset.current = offset
      }
    }

    const onTouchEnd = () => {
      if (props.readOnly || !moving.current) {
        return
      }
      const distance = stateRef.current.offset - momentumOffset.current
      const duration = Date.now() - touchStartTime.current

      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE

      if (allowMomentum) {
        momentum(distance, duration)
        return
      }

      const index = getIndexByOffset(stateRef.current.offset)
      updateState({ duration: DEFAULT_DURATION })
      setIndex(index)

      // compatible with desktop scenario
      // use setTimeout to skip the click event triggered after touchstart
      setTimeout(() => {
        moving.current = false
      }, 0)
    }

    const renderOptions = () => {
      const optionStyle = {
        height: `${props.itemHeight}px`,
      }

      return options.map((option, index: number) => {
        const { disabled } = option

        const data = {
          role: 'button',
          style: optionStyle,
          tabIndex: disabled ? -1 : 0,
          className: clsx(
            bem('item', {
              disabled,
              selected: option[valueKey] === value,
            })
          ),
          onClick: () => {
            onClickItem(index)
          },
        }

        const childData = {
          className: 'rv-ellipsis',
          children: option[textKey],
        }

        return (
          <li {...data} key={index}>
            {props.optionRender ? (
              props.optionRender(option)
            ) : (
              <div {...childData} />
            )}
          </li>
        )
      })
    }

    useImperativeHandle(ref, () => ({
      stopMomentum,
    }))

    return (
      <div
        className={clsx(bem(), props.className)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <ul
          ref={wrapper}
          style={{
            transform: `translate3d(0, ${state.offset + baseOffset}px, 0)`,
            transitionDuration: `${state.duration}ms`,
            transitionProperty: state.duration ? 'all' : 'none',
          }}
          className={clsx(bem('wrapper'))}
          onTransitionEnd={stopMomentum}
        >
          {renderOptions()}
        </ul>
      </div>
    )
  }),
  (prev, next) => {
    if (prev.index !== next.index) return false
    if (prev.value !== next.value) {
      return false
    }
    if (prev.onSelect !== next.onSelect) return false
    if (JSON.stringify(prev.options) !== JSON.stringify(next.options)) {
      return false
    }
    return true
  }
)

export default PickerColumn

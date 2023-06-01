import React, { useEffect, useMemo, useRef, useState } from 'react'
import type { MouseEvent, FormEvent, TouchEvent } from 'react'
import clsx from 'clsx'
import { StepperProps, StepperInstance } from './PropsType'
import { isNaN } from '../utils/validate/number'
import {
  addUnit,
  getSizeStyle,
  formatNumber,
  resetScroll,
  preventDefault,
  createNamespace,
} from '../utils'
import { usePropsValue } from '../hooks'
import { bound } from '../utils/bound'
import useRefState from '../hooks/use-ref-state'
import { mergeProps } from '../utils/get-default-props'

const LONG_PRESS_INTERVAL = 100
const LONG_PRESS_START_TIME = 600

// add num and avoid float number
function add(num1: number, num2: number) {
  const cardinal = 10 ** 10
  return Math.round((num1 + num2) * cardinal) / cardinal
}

const [bem] = createNamespace('stepper')

const Stepper = React.forwardRef<StepperInstance, StepperProps>((p, ref) => {
  const props = mergeProps(p, {
    theme: 'default' as const,
    max: Number.MAX_VALUE,
    step: 1,
    showPlus: true,
    showMinus: true,
    showInput: true,
    longPress: true,
    defaultValue: 0,
  })
  const { defaultValue } = props
  let actionType: 'plus' | 'minus'
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = usePropsValue<number>({
    ...props,
    defaultValue,
    onChange: v => {
      props.onChange?.(v, { name: props.name })
    },
  })

  const format = (v: number) => {
    v = +formatNumber(String(v), !props.integer)
    if (isNaN(v)) return
    let target = bound(v, props.min, props.max)
    if (props.decimalLength !== undefined) {
      target = parseFloat(target.toFixed(props.decimalLength))
    }
    return target
  }

  const setValueWithCheck = (v: number) => {
    setValue(format(v))
  }

  const [inputValue, setInputValue, inputValueRef] = useRefState(() =>
    convertValueToText(value, props.decimalLength)
  )

  const [hasFocus, setHasFocus] = useState(false)

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value, props.decimalLength))
    }
  }, [hasFocus])

  useEffect(() => {
    if (!hasFocus) {
      setInputValue(convertValueToText(value, props.decimalLength))
    }
  }, [value, props.decimalLength])

  const minusDisabled = useMemo(
    () => props.disabled || props.disableMinus || +value <= +props.min,
    [props.disabled, props.disableMinus, props.min, value]
  )

  const plusDisabled = useMemo(
    () => props.disabled || props.disablePlus || +value >= +props.max,
    [props.disabled, props.disablePlus, props.max, value]
  )

  const inputStyle = useMemo(
    () => ({
      width: addUnit(props.inputWidth),
      height: addUnit(props.buttonSize),
    }),
    [props.inputWidth, props.buttonSize]
  )

  const buttonStyle = useMemo(
    () => getSizeStyle(props.buttonSize),
    [props.buttonSize]
  )

  const onChange = (e?: MouseEvent) => {
    const isMinus = actionType === 'minus'
    if ((actionType === 'plus' && plusDisabled) || (isMinus && minusDisabled)) {
      props.onOverlimit?.(actionType)
      return
    }

    const diff = isMinus ? -props.step : +props.step
    const val = add(+inputValueRef.current, diff)

    setValueWithCheck(val)
    if (isMinus) {
      props.onMinus?.(e, val)
    } else {
      props.onPlus?.(e, val)
    }
  }

  const onLongPressChange = () => {
    const isMinus = actionType === 'minus'

    const diff = isMinus ? -props.step : +props.step
    const val = add(+inputValueRef.current, diff)

    setInputValue(`${format(val)}`)
  }

  const onInput = (event: FormEvent) => {
    const { value: inputValue } = event.target as HTMLInputElement
    setInputValue(inputValue)
    const value = convertTextToValue(inputValue)

    if (value === null) {
      if (props.allowEmpty) {
        setValue(null)
      } else {
        setValue(defaultValue)
      }
    } else {
      setValueWithCheck(value)
    }
  }

  const onFocus: React.FocusEventHandler<HTMLInputElement> = event => {
    setHasFocus(true)
    // readOnly not work in lagacy mobile safari
    if (props.disableInput && inputRef.current) {
      inputRef.current.blur()
    } else {
      props.onFocus?.(event)
    }
  }

  const onBlur: React.FocusEventHandler<HTMLInputElement> = event => {
    setHasFocus(false)
    props.onBlur?.(event)
    resetScroll()
  }

  const isLongPress = useRef<boolean>(false)
  const longPressTimer = useRef<any>(null)

  const longPressStep = () => {
    longPressTimer.current = setTimeout(() => {
      onLongPressChange()
      longPressStep()
    }, LONG_PRESS_INTERVAL)
  }

  const onTouchStart = () => {
    if (props.longPress) {
      isLongPress.current = false
      clearTimeout(longPressTimer.current)
      longPressTimer.current = setTimeout(() => {
        isLongPress.current = true
        longPressStep()
      }, LONG_PRESS_START_TIME)
    }
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (props.longPress) {
      clearTimeout(longPressTimer.current)
      if (isLongPress.current) {
        preventDefault(event)
      }
    }
  }

  const onMousedown = (event: MouseEvent) => {
    // fix mobile safari page scroll down issue
    // see: https://github.com/youzan/vant/issues/7690
    if (props.disableInput) {
      event.preventDefault()
    }
  }

  const createListeners = (type: 'plus' | 'minus') => ({
    onClick: (event: MouseEvent) => {
      // disable double tap scrolling on mobile safari
      event.preventDefault()
      actionType = type
      onChange(event)
    },
    onTouchStart: () => {
      actionType = type
      onTouchStart()
    },
    onTouchEnd,
    onTouchCancel: onTouchEnd,
  })

  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    blur: () => inputRef.current.blur(),
  }))

  return (
    <div
      className={clsx(props.className, bem([props.theme]))}
      style={props.style}
    >
      {props.showMinus && (
        <button
          type='button'
          aria-label='minus'
          style={buttonStyle}
          className={clsx(bem('minus', { disabled: minusDisabled }))}
          {...createListeners('minus')}
        />
      )}
      {props.showInput && (
        <input
          ref={inputRef}
          type={props.integer ? 'tel' : 'text'}
          role='spinbutton'
          className={clsx(bem('input'))}
          value={inputValue}
          style={inputStyle}
          disabled={props.disabled || props.disableInput}
          readOnly={props.disableInput}
          inputMode={props.integer ? 'numeric' : 'decimal'}
          placeholder={props.placeholder}
          aria-valuemax={+props.max as number}
          aria-valuemin={+props.min as number}
          aria-valuenow={+inputValue as number}
          onChange={onInput}
          onBlur={onBlur}
          onFocus={onFocus}
          onMouseDown={onMousedown}
          onClick={props.onClick}
        />
      )}
      {props.showPlus && (
        <button
          type='button'
          aria-label='add'
          style={buttonStyle}
          className={clsx(bem('plus', { disabled: plusDisabled }))}
          {...createListeners('plus')}
        />
      )}
    </div>
  )
})

function convertValueToText(value: number | null, digits?: number) {
  if (value === null || value === undefined) return ''
  if (digits !== undefined) {
    return value.toFixed(digits)
  } else {
    return value.toString()
  }
}

function convertTextToValue(text: string) {
  if (text === '') return null
  return parseFloat(text)
}

export default Stepper

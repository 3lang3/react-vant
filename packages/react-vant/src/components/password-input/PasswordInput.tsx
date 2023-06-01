import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react'
import clsx from 'clsx'
import {
  isFunction,
  formatNumber,
  isDef,
  addUnit,
  createNamespace,
} from '../utils'
import { PasswordInputInstance, PasswordInputProps } from './PropsType'
import { useSetState, useUpdateEffect } from '../hooks'
import { BORDER_LEFT, BORDER_SURROUND } from '../utils/constant'
import { mergeProps } from '../utils/get-default-props'

type InputMode =
  | 'text'
  | 'none'
  | 'tel'
  | 'url'
  | 'email'
  | 'numeric'
  | 'decimal'
  | 'search'

const [bem] = createNamespace('password-input')

const PasswordInput = forwardRef<PasswordInputInstance, PasswordInputProps>(
  (p, ref) => {
    const props = mergeProps(p, {
      length: 6,
      gutter: 0,
      mask: true,
      type: 'text',
    })
    const innerEffect = useRef<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const [state, updateState] = useSetState({
      code: props.value || '',
      focused: props.autoFocus,
      inputType: props.type,
      inputMode: 'text',
    })
    const codeArr = useMemo(
      () => state.code?.toString().split(''),
      [state.code]
    )
    const cursorIndex = useMemo(() => codeArr.length, [codeArr.length])

    const { length, onSubmit } = props

    const focus = () => {
      inputRef.current?.focus()
      updateState({ focused: true })
    }

    const blur = () => {
      inputRef.current?.blur()
      updateState({ focused: false })
    }

    const clear = () => {
      updateState({ code: '' })
    }

    const formatValue = (val: string, callback?: (v: string) => void) => {
      if (isDef(length) && val?.length > +length) {
        val = val.slice(0, length)
      }

      if (props.type === 'number') {
        val = formatNumber(val, false, false)
      }

      if (isFunction(props.validator)) {
        if (props.validator(val)) {
          updateState({ code: val })
          if (isFunction(callback)) callback(val)
        }
      } else {
        updateState({ code: val })
        if (isFunction(callback)) callback(val)
      }
    }

    const handleChange = e => {
      const val = e.target.value || ''
      innerEffect.current = true
      formatValue(val, props.onChange)
    }

    const renderPoints = () => {
      const Points: React.ReactNode[] = []
      const { mask, gutter } = props

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        const char = codeArr[i]
        const showBorder = i !== 0 && !gutter
        const showCursor = state.focused && cursorIndex === i && !char
        let style
        if (i !== 0 && gutter) {
          style = { marginLeft: addUnit(gutter) }
        }

        Points.push(
          <li
            key={i}
            className={clsx(
              {
                [BORDER_LEFT]: showBorder,
                [props.highlightClass]:
                  props.highlightClass && char && !props.mask,
              },
              bem('item', { focus: showCursor })
            )}
            style={style}
          >
            {mask ? (
              <i style={{ visibility: char ? 'visible' : 'hidden' }} />
            ) : (
              char
            )}
            {showCursor && <div className={clsx(bem('cursor'))} />}
          </li>
        )
      }

      return Points
    }

    useUpdateEffect(() => {
      if (innerEffect.current) {
        innerEffect.current = false
        return
      }
      formatValue(props.value ?? '')
    }, [props.value])

    useEffect(() => {
      if (state.code.length >= length) {
        inputRef?.current?.blur?.()
        onSubmit?.(state.code)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [length, state.code])

    useUpdateEffect(() => {
      if (props.type === 'number') {
        updateState({ inputType: 'tel', inputMode: 'numeric' })
      } else {
        updateState({ inputType: 'text' })
      }
    }, [props.type])

    useImperativeHandle(ref, () => ({
      focus,
      blur,
      clear,
    }))

    const info = props.errorInfo || props.info

    return (
      <div className={clsx(bem(), props.className)} style={props.style}>
        <ul
          className={clsx(bem('security'), {
            [BORDER_SURROUND]: !props.gutter,
          })}
        >
          {renderPoints()}
          <input
            ref={inputRef}
            type={state.inputType}
            inputMode={state.inputMode as InputMode}
            pattern='[0-9]*'
            maxLength={props.length}
            value={state.code}
            autoComplete='false'
            autoCorrect='off'
            autoCapitalize='off'
            autoFocus={props.autoFocus}
            spellCheck='false'
            onChange={handleChange}
            onFocus={e => {
              updateState({ focused: true })
              props.onFocus?.(e)
            }}
            onBlur={e => {
              updateState({ focused: false })
              props.onBlur?.(e)
            }}
          />
        </ul>
        {info ? (
          <div className={clsx(bem(props.errorInfo ? 'error-info' : 'info'))}>
            {info}
          </div>
        ) : null}
      </div>
    )
  }
)

export default PasswordInput

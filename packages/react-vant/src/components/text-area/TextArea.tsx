import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useMemo,
} from 'react'
import { Clear } from '@react-vant/icons'
import clsx from 'clsx'
import { TextAreaInstance, TextAreaProps } from './PropsType'
import { createNamespace, isDef, isObject, resetScroll } from '../utils'
import { usePropsValue } from '../hooks'

const [bem] = createNamespace('textarea')

const TextArea = forwardRef<TextAreaInstance, TextAreaProps>((props, ref) => {
  const [hasFocus, setHasFocus] = useState(false)
  const nativeTextAreaRef = useRef<HTMLTextAreaElement>()
  const compositionStartRef = useRef(false)
  const [value, setValue] = usePropsValue(props)

  const {
    className,
    style,
    name,
    rows,
    placeholder,
    disabled,
    readOnly,
    maxLength,
    showWordLimit,
    autoFocus,
  } = props

  const focus = () => {
    if (nativeTextAreaRef?.current) {
      nativeTextAreaRef.current.focus()
    }
  }

  const blur = () => {
    if (nativeTextAreaRef?.current) {
      nativeTextAreaRef.current.blur()
    }
  }

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('')
    },
    focus,
    blur,
    get nativeElement() {
      return nativeTextAreaRef.current
    },
  }))

  const adjustSize = () => {
    const input = nativeTextAreaRef.current

    if (!input) return

    input.style.height = 'auto'

    let height = input.scrollHeight
    if (isObject(props.autoSize)) {
      const { maxHeight, minHeight } = props.autoSize
      if (maxHeight) {
        height = Math.min(height, maxHeight)
      }
      if (minHeight) {
        height = Math.max(height, minHeight)
      }
    }

    if (height) {
      input.style.height = `${height}px`
    }
  }

  useEffect(() => {
    adjustSize()
  }, [value])

  const controlClass = React.useMemo(() => {
    return bem('control', [
      {
        'min-height': !props.autoSize,
        clear: props.clearable,
      },
    ])
  }, [props.autoSize])

  const handleChange = e => {
    const inputValue = e?.currentTarget?.value
    let finalValue = inputValue

    if (isDef(maxLength) && finalValue.length > +maxLength) {
      finalValue = finalValue.slice(0, maxLength)
    }

    setValue(finalValue)
  }

  const handleFocus = e => {
    setHasFocus(true)
    props.onFocus?.(e)

    // readOnly not work in legacy mobile safari
    if (readOnly) {
      blur()
    }
  }

  const handleBulr = e => {
    setHasFocus(false)
    props.onBlur?.(e)
    resetScroll()
  }

  const renderWordLimit = () => {
    if (showWordLimit) {
      const currentCount = (value ? `${value}` : '').length
      return (
        <div className={clsx(bem('word-limit'))}>
          {typeof showWordLimit === 'function' ? (
            showWordLimit({ currentCount, maxLength })
          ) : (
            <>
              <span className={clsx(bem('word-num'))}>{currentCount}</span>
              {maxLength ? `/${maxLength}` : false}
            </>
          )}
        </div>
      )
    }

    return null
  }

  const handleClear = e => {
    setValue('')
    props.onClear?.(e)
  }

  const showClear = useMemo(() => {
    if (props.clearable && !readOnly) {
      const hasValue = value !== ''
      const trigger =
        props.clearTrigger === 'always' ||
        (props.clearTrigger === 'focus' && hasFocus)

      return hasValue && trigger
    }
    return false
  }, [value, props.clearTrigger, hasFocus])

  return (
    <div className={clsx(bem(), className)} style={style}>
      <textarea
        ref={nativeTextAreaRef as React.RefObject<HTMLTextAreaElement>}
        name={name}
        rows={rows}
        className={clsx(controlClass)}
        value={value}
        disabled={disabled}
        autoFocus={autoFocus}
        readOnly={readOnly}
        placeholder={placeholder || ''}
        onBlur={handleBulr}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyPress={props.onKeyPress}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        autoComplete={props.autoComplete}
        onCompositionStart={e => {
          compositionStartRef.current = true
          props.onCompositionStart?.(e as any)
        }}
        onCompositionEnd={e => {
          compositionStartRef.current = false
          props.onCompositionEnd?.(e as any)
        }}
        onClick={
          props.onClick as unknown as React.HTMLAttributes<HTMLTextAreaElement>['onClick']
        }
      />
      {showClear &&
        React.cloneElement(props.clearIcon as React.ReactElement, {
          className: clsx(bem('clear')),
          onTouchStart: handleClear,
        })}
      {renderWordLimit()}
    </div>
  )
})

TextArea.defaultProps = {
  rows: 2,
  clearIcon: <Clear />,
  clearTrigger: 'focus',
  defaultValue: '',
}

export default TextArea

import React, {
  useRef,
  CSSProperties,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { Clear, QuestionO } from '@react-vant/icons'
import clsx from 'clsx'
import Cell from '../cell'
import Dialog from '../dialog'
import Input, { InputInstance } from '../input'
import { TextAreaInstance } from '../text-area/PropsType'
import { FieldInstance, FieldProps, FieldTooltipProps } from './PropsType'
import { isDef, addUnit, createNamespace } from '../utils'
import { COMPONENT_TYPE_KEY } from '../utils/constant'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('field')

const Field = forwardRef<FieldInstance, FieldProps>((p, ref) => {
  const props = mergeProps(p, {
    clearIcon: <Clear />,
    clearTrigger: 'focus',
    formatTrigger: 'onChange',
    defaultValue: '',
  })
  const inputRef = useRef<InputInstance>(null)
  const textareaRef = useRef<TextAreaInstance>(null)

  const elementRef = props.type === 'textarea' ? textareaRef : inputRef

  const focus = () => {
    if (elementRef.current) {
      elementRef.current.focus()
    }
  }

  const blur = () => {
    if (elementRef.current) {
      elementRef.current.blur()
    }
  }

  const clear = () => {
    if (elementRef.current) {
      elementRef.current.clear()
    }
  }

  useImperativeHandle(ref, () => ({
    focus,
    blur,
    clear,
    get nativeElement() {
      return elementRef.current.nativeElement
    },
  }))

  const getProp = key => {
    if (isDef(props[key])) {
      return props[key]
    }
    return null
  }

  const labelStyle = (): CSSProperties => {
    const labelW = getProp('labelWidth')
    if (labelW) {
      return { width: addUnit(labelW) }
    }

    return {}
  }

  const formatValue = (inputValue, trigger = 'onChange') => {
    const { formatTrigger, formatter } = props
    if (formatter && trigger === formatTrigger) {
      return formatter(inputValue)
    }

    return inputValue
  }

  const onChange = (val: string) => {
    props.onChange?.(formatValue(val))
  }

  const renderInput = () => {
    const {
      value,
      defaultValue,
      align,
      type,
      placeholder,
      name,
      maxLength,
      disabled,
      readOnly,
      clearable,
      clearIcon,
      clearTrigger,
      autoFocus,
      onClear,
      onBlur,
      onFocus,
      onKeyPress,
      onOverlimit,
    } = props

    if (isDef(props.children)) {
      return <div className={clsx(bem('children'))}>{props.children}</div>
    }

    const commonProps = {
      value,
      onChange,
      placeholder,
      name,
      defaultValue,
      disabled,
      clearable,
      clearIcon,
      clearTrigger,
      onClear,
      onBlur,
      onFocus,
      onKeyPress,
      onOverlimit,
      autoFocus,
      readOnly,
      maxLength,
      onClick: props.onClickInput,
    }

    if (type === 'textarea') {
      return (
        <Input.TextArea
          ref={textareaRef}
          autoSize={props.autoSize}
          showWordLimit={props.showWordLimit}
          rows={props.rows}
          {...commonProps}
        />
      )
    }

    return <Input ref={inputRef} type={type} align={align} {...commonProps} />
  }

  const renderLeftIcon = () => {
    const { leftIcon, onClickLeftIcon } = props
    if (!leftIcon) return null
    return (
      <div className={clsx(bem('left-icon'))} onClick={onClickLeftIcon}>
        {leftIcon}
      </div>
    )
  }

  const renderRightIcon = () => {
    const { rightIcon, onClickRightIcon } = props
    if (!rightIcon) return null
    return (
      <div className={clsx(bem('right-icon'))} onClick={onClickRightIcon}>
        {rightIcon}
      </div>
    )
  }

  const renderMessage = () => {
    const message = props.errorMessage

    if (message) {
      return <div className={clsx(bem('error-message'))}>{message}</div>
    }
    return null
  }

  const renderIntro = () => {
    if (props.intro) {
      return <div className={clsx(bem('intro'))}>{props.intro}</div>
    }
    return null
  }

  const renderTooltip = () => {
    const { tooltip } = props
    if (tooltip) {
      let icon = (<QuestionO />) as React.ReactNode
      let dialogProps = { message: tooltip as React.ReactNode }
      if (!(React.isValidElement(tooltip) || typeof tooltip === 'string')) {
        const { icon: customIcon, ...customDialogProps } =
          tooltip as FieldTooltipProps
        icon = customIcon || icon
        dialogProps = customDialogProps as typeof dialogProps
      }

      return (
        <div
          className={clsx(bem('tooltip'))}
          onClick={() => Dialog.show(dialogProps)}
        >
          {icon}
        </div>
      )
    }
    return null
  }

  const renderLabel = () => {
    const { label, colon } = props
    if (label) {
      return (
        <>
          {label}
          {!!colon && ':'}
          {renderTooltip()}
        </>
      )
    }
    return null
  }

  const {
    size,
    center,
    border,
    isLink,
    required,
    clickable,
    labelAlign,
    className,
    labelClass,
    valueClass,
    controlAlign,
    arrowDirection,
    disabled,
    titleStyle,
    error,
  } = props

  const suffix = props.suffix ?? props.button

  return (
    <Cell
      title={renderLabel()}
      size={size}
      icon={renderLeftIcon()}
      center={center}
      border={border}
      isLink={isLink}
      required={required}
      clickable={clickable}
      extra={props.extra}
      titleStyle={{ ...labelStyle(), ...titleStyle }}
      valueClass={clsx(bem('value', [controlAlign]), valueClass)}
      titleClass={clsx(bem('label', labelAlign), labelClass)}
      arrowDirection={arrowDirection}
      onClick={props.onClick}
      style={props.style}
      className={clsx(
        bem({
          error,
          disabled,
          [`label-${labelAlign}`]: labelAlign,
        }),
        className
      )}
    >
      <div className={clsx(bem('body'))}>
        {props.prefix && (
          <div className={clsx(bem('prefix'))}>{props.prefix}</div>
        )}
        <div className={clsx(bem('control-wrapper'))}>{renderInput()}</div>
        {renderRightIcon()}
        {suffix && <div className={clsx(bem('suffix'))}>{suffix}</div>}
      </div>
      {renderMessage()}
      {renderIntro()}
    </Cell>
  )
})

export const FIELD_KEY = Symbol('field')

const FieldNamespace = Object.assign(Field, { [COMPONENT_TYPE_KEY]: FIELD_KEY })

export default FieldNamespace

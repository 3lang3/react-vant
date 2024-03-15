import React, {
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
  useContext,
  useState,
} from 'react'
import clsx from 'clsx'

import Loading from '../loading'
import Column from './PickerColumn'
import useEventListener from '../hooks/use-event-listener'

import {
  PickerProps,
  PickerMultipleProps,
  PickerPopupActions,
  PickerColumnOption,
} from './PropsType'
import {
  unitToPx,
  preventDefault,
  isObject,
  extend,
  createNamespace,
} from '../utils'
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant'
import ConfigProviderContext from '../config-provider/ConfigProviderContext'
import { useMemoizedFn, usePropsValue } from '../hooks'
import Popup from '../popup'
import { useColumnsExtend } from './columnsExtend'
import useRefs from '../hooks/use-refs'
import useDebounceEffect from '../hooks/use-debunce-effect'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('picker')

function PickerInner<T = PickerColumnOption>(props: PickerMultipleProps<T>) {
  const { locale } = useContext(ConfigProviderContext)

  const wrapper = useRef(null)

  const [refs, setRefs] = useRefs()

  const {
    text: textKey,
    value: valueKey,
    children: childrenKey,
  } = extend(
    {
      text: 'text',
      value: 'value',
      children: 'children',
    },
    props.columnsFieldNames
  )

  const [innerValue, setInnerValue] = useState<string[]>(props.value)

  // Sync `value` to `innerValue`
  useEffect(() => {
    if (props.value === undefined) return // Uncontrolled mode
    if (JSON.stringify(innerValue) === JSON.stringify(props.value)) return
    setInnerValue(props.value)
  }, [props.value])

  const formatColumns = useColumnsExtend(
    props.columns,
    { textKey, valueKey, childrenKey },
    innerValue
  )
  const { columns, items, indexes } = formatColumns

  useDebounceEffect(
    () => {
      if (JSON.stringify(props.value) === JSON.stringify(innerValue)) return
      props.onChange?.(innerValue, items, indexes)
    },
    [innerValue],
    {
      wait: 100,
      leading: false,
      trailing: true,
    }
  )

  const itemHeight = useMemo(
    () => unitToPx(props.itemHeight),
    [props.itemHeight]
  )

  const handleSelect = (val: PickerColumnOption, index: number) => {
    setInnerValue(prev => {
      const next = [...prev]
      next[index] = val?.[valueKey]
      return next
    })
  }

  const confirm = () => {
    refs.forEach(_ref => _ref.stopMomentum())
    props.onConfirm?.(innerValue, items, indexes)
  }

  const cancel = () => {
    props.onCancel?.()
  }

  const renderTitle = () => {
    if (props.title) {
      return (
        <div className={clsx(bem('title'), 'rv-ellipsis')}>{props.title}</div>
      )
    }
    return null
  }

  const renderCancel = () => {
    const text = props.cancelButtonText || locale.cancel
    return (
      <button type='button' className={clsx(bem('cancel'))} onClick={cancel}>
        {text}
      </button>
    )
  }

  const renderConfirm = () => {
    const text = props.confirmButtonText || locale.confirm
    return (
      <button type='button' className={clsx(bem('confirm'))} onClick={confirm}>
        {text}
      </button>
    )
  }

  const renderToolbar = () => {
    if (props.showToolbar) {
      return (
        <div className={clsx(bem('toolbar'))}>
          {props.toolbar || (
            <>
              {renderCancel()}
              {renderTitle()}
              {renderConfirm()}
            </>
          )}
        </div>
      )
    }
    return null
  }

  const renderColumnItems = () => {
    return columns.map((item, columnIndex) => {
      const placeholder = Array.isArray(props.placeholder)
        ? props.placeholder[columnIndex]
        : props.placeholder
      return (
        <Column
          textKey={textKey}
          valueKey={valueKey}
          key={columnIndex}
          ref={setRefs(columnIndex)}
          placeholder={placeholder}
          optionRender={props.optionRender}
          readOnly={props.readOnly}
          value={innerValue[columnIndex]}
          itemHeight={itemHeight}
          index={columnIndex}
          swipeDuration={props.swipeDuration}
          visibleItemCount={props.visibleItemCount}
          options={item}
          onSelect={handleSelect}
        />
      )
    })
  }

  const renderColumns = () => {
    const wrapHeight = itemHeight * props.visibleItemCount
    const frameStyle = { height: `${itemHeight}px` }
    const columnsStyle = { height: `${wrapHeight}px` }
    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`,
    }

    return (
      <div ref={wrapper} className={clsx(bem('columns'))} style={columnsStyle}>
        {renderColumnItems()}
        <div className={clsx(bem('mask'))} style={maskStyle} />
        <div
          className={clsx(BORDER_UNSET_TOP_BOTTOM, bem('frame'))}
          style={frameStyle}
        />
      </div>
    )
  }

  useEventListener('touchmove', preventDefault, {
    target: wrapper.current,
  })

  return (
    <div className={clsx(bem(), props.className)}>
      {props.toolbarPosition === 'top' ? renderToolbar() : null}
      {props.loading ? <Loading className={clsx(bem('loading'))} /> : null}
      {props.columnsTop}
      {renderColumns()}
      {props.columnsBottom}
      {props.toolbarPosition === 'bottom' ? renderToolbar() : null}
    </div>
  )
}

function PopupPicker<T = PickerColumnOption>(
  p: PickerProps<T>,
  ref: React.ForwardedRef<PickerPopupActions & Partial<PickerPopupActions>>
) {
  const props = mergeProps(p, {
    columns: [],
    itemHeight: 44,
    visibleItemCount: 5,
    swipeDuration: 300,
    showToolbar: true,
    placeholder: true,
    toolbarPosition: 'top',
  })
  const {
    visible: outerVisible,
    popup,
    children,
    defaultValue = [],
    ...pickerProps
  } = props
  const [visible, setVisible] = usePropsValue({
    value: outerVisible,
    defaultValue: false,
    onChange: v => {
      if (v === false) {
        props.onClose?.()
      }
    },
  })

  const actions: PickerPopupActions = {
    toggle: () => {
      if (popup) setVisible(v => !v)
    },
    open: () => {
      if (popup) {
        setVisible(true)
      }
    },
    close: () => {
      if (popup) {
        setVisible(false)
      }
    },
  }

  useImperativeHandle(ref, () => actions)

  const formatValue = Array.isArray(props.value)
    ? props.value
    : props.value !== undefined
    ? [props.value]
    : undefined
  const formatDefaultValue = Array.isArray(defaultValue)
    ? defaultValue
    : defaultValue !== undefined
    ? [defaultValue]
    : []

  const {
    text: textKey,
    value: valueKey,
    children: childrenKey,
  } = extend(
    {
      text: 'text',
      value: 'value',
      children: 'children',
    },
    props.columnsFieldNames
  )

  const isPlainType = useMemo(() => {
    const firstColumn = props.columns[0] || {}

    if (Array.isArray(firstColumn)) return false
    if (typeof firstColumn === 'object') {
      // 联级
      if (childrenKey in firstColumn) {
        return false
      }
    }
    // 单列
    return true
  }, [props.columns, childrenKey])

  const parseValue = (target: any[]) => (isPlainType ? target?.[0] : target)

  const [value, setValue] = usePropsValue({
    value: formatValue,
    defaultValue: formatDefaultValue,
  })

  const formatColumns = useColumnsExtend(
    props.columns,
    { textKey, valueKey, childrenKey },
    value
  )

  const [innerValue, setInnerValue] = useState<string[]>(value)

  useEffect(() => {
    if (popup && JSON.stringify(innerValue) !== JSON.stringify(value)) {
      setInnerValue(value)
    }
  }, [visible])

  useEffect(() => {
    if (!popup && JSON.stringify(innerValue) !== JSON.stringify(value)) {
      setInnerValue(value)
    }
  }, [value])

  const onConfirm = (val, items, indexes) => {
    setValue(innerValue, true)
    props.onConfirm?.(parseValue(val), parseValue(items), parseValue(indexes))
    if (popup) actions.close()
  }

  const onCancel = () => {
    props.onCancel?.()
    if (popup) actions.close()
  }

  const onChange = useMemoizedFn((val, ext, indexes) => {
    setInnerValue(val)
    if (popup) {
      if (visible)
        props.onChange?.(parseValue(val), parseValue(ext), parseValue(indexes))
    } else {
      props.onChange?.(parseValue(val), parseValue(ext), parseValue(indexes))
    }
  })

  const popupProps = isObject(popup)
    ? { closeOnClickOverlay: true, ...popup }
    : { closeOnClickOverlay: true }
  const content = (
    <PickerInner
      {...pickerProps}
      value={innerValue}
      onCancel={onCancel}
      onConfirm={onConfirm}
      onChange={onChange}
    />
  )
  if (!popup) return content
  return (
    <>
      <Popup
        round
        position='bottom'
        visible={visible}
        closeOnClickOverlay
        onClickOverlay={() => {
          if (!popupProps?.closeOnClickOverlay) return
          setVisible(false)
        }}
        {...popupProps}
      >
        {content}
      </Popup>
      {children?.(parseValue(value), parseValue(formatColumns.items), actions)}
    </>
  )
}

const Picker = forwardRef(PopupPicker) as <T>(
  props: PickerProps<T> & {
    ref?: React.ForwardedRef<Partial<PickerPopupActions>>
  }
) => ReturnType<typeof PopupPicker>

export default Picker

/* eslint-disable no-plusplus */
import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import cls from 'clsx'
import { Cross, Success } from '@react-vant/icons'
import {
  PopupCascaderProps,
  CascaderOption,
  CascaderProps,
  CascaderTab,
} from './PropsType'
import { createNamespace, extend, isObject } from '../utils'
import { useMemoizedFn, usePropsValue, useUpdateEffect } from '../hooks'
import Tabs from '../tabs'
import { TabsClickTabEventParams } from '../tabs/PropsType'
import ConfigProviderContext from '../config-provider/ConfigProviderContext'
import type { PickerPopupActions } from '../picker'
import Popup from '../popup'
import { useCascaderExtend } from './useCascaderExtend'
import useDebounceEffect from '../hooks/use-debunce-effect'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('cascader')

const Cascader: React.FC<CascaderProps> = props => {
  const { locale } = useContext(ConfigProviderContext)

  const [value, setValue] = useState(() =>
    props.value === undefined ? props.defaultValue : props.value
  )

  const [activeTab, updateActiveTab] = useState(0)

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
    props.fieldNames
  )

  const { tabs, items, depth } = useCascaderExtend(
    props.options,
    { textKey, valueKey, childrenKey },
    value || []
  )

  // sync props.value to inner value
  useUpdateEffect(() => {
    if (props.value === undefined) return // uncontroll mode
    if (JSON.stringify(value) !== JSON.stringify(props.value)) {
      setValue(props.value)
    }
  }, [props.value])

  // update active tab index from value
  useEffect(() => {
    let tabIndex = 0
    if (Array.isArray(value) && value.length > 0) tabIndex = value.length
    if (tabIndex >= depth) tabIndex = depth - 1
    if (tabIndex === activeTab) return

    updateActiveTab(tabIndex)
  }, [value])

  useDebounceEffect(
    () => {
      if (JSON.stringify(props.value) === JSON.stringify(value)) return
      props.onChange?.(value, items)

      if (value.length >= depth) {
        props.onFinish?.(value, items)
      }
    },
    [value],
    {
      wait: 100,
      leading: false,
      trailing: true,
    }
  )

  const onSelect = (option: CascaderOption, tabIndex: number) => {
    if (option.disabled) {
      return
    }
    setValue(prev => {
      const next = [...prev]
      next[tabIndex] = option?.[valueKey]
      return next.slice(0, tabIndex + 1)
    })
  }

  const onClickTab = ({ name, index }: TabsClickTabEventParams) => {
    props.onClickTab?.(+name)
    updateActiveTab(index)
  }

  const renderCloseIcon = () => {
    if (!props.closeable) return null
    if (props.closeIcon) {
      return React.cloneElement(props.closeIcon as React.ReactElement, {
        className: cls(bem('close-icon')),
        onClick: props.onClose,
      })
    }
    return <Cross className={cls(bem('close-icon'))} onClick={props.onClose} />
  }

  const renderHeader = () => (
    <div className={cls(bem('header'))}>
      <h2 className={cls(bem('title'))}>{props.title}</h2>
      {renderCloseIcon()}
    </div>
  )

  const renderOption = (
    option: CascaderOption,
    selected: boolean,
    tabIndex: number
  ) => {
    const color = option.color || (selected ? props.activeColor : undefined)
    const Text = props.optionRender ? (
      props.optionRender({ option, selected })
    ) : (
      <span>{option[textKey]}</span>
    )
    return (
      <li
        key={option[valueKey]}
        className={cls(
          bem('option', {
            selected,
            disabled: option.disabled,
          }),
          option.className
        )}
        style={{ color }}
        onClick={() => onSelect(option, tabIndex)}
      >
        {Text}
        {selected ? <Success className={cls(bem('selected-icon'))} /> : null}
      </li>
    )
  }

  const renderOptions = (
    options: CascaderOption[],
    selectedOption: CascaderOption | null,
    tabIndex: number
  ) => (
    <ul key={tabIndex} className={cls(bem('options'))}>
      {options.map(option =>
        renderOption(
          option,
          option[valueKey] === selectedOption?.[valueKey],
          tabIndex
        )
      )}
    </ul>
  )

  const renderTab = (options: CascaderTab['options'], tabIndex: number) => {
    const selectedOption = items[tabIndex]
    const title = selectedOption
      ? selectedOption[textKey]
      : props.placeholder || locale.vanPicker.select

    return (
      <Tabs.TabPane
        key={tabIndex}
        title={title}
        titleClass={cls(
          bem('tab', {
            unselected: !selectedOption,
          })
        )}
      >
        {renderOptions(options, selectedOption, tabIndex)}
      </Tabs.TabPane>
    )
  }

  const renderTabs = () => (
    <Tabs
      animated
      active={activeTab}
      className={cls(bem('tabs'))}
      color={props.activeColor}
      swipeThreshold={0}
      swipeable={props.swipeable}
      duration={300}
      onClickTab={onClickTab}
    >
      {tabs.map(renderTab)}
    </Tabs>
  )

  return (
    <div className={cls(bem())}>
      {renderHeader()}
      {tabs.length ? renderTabs() : null}
    </div>
  )
}

const CascaderPopup = React.forwardRef<PickerPopupActions, PopupCascaderProps>(
  (p, ref) => {
    const props = mergeProps(p, {
      closeable: true,
      swipeable: false,
      defaultValue: [],
      options: [],
    })
    const { visible: outerVisible, popup, ...cascaderProps } = props

    const [visible, setVisible] = usePropsValue({
      value: outerVisible,
      defaultValue: false,
    })

    const [value, setValue] = useState(() =>
      props.value === undefined ? props.defaultValue : props.value
    )

    const [innerValue, setInnerValue] = useState<string[]>(value)

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
      props.fieldNames
    )

    const { items } = useCascaderExtend(
      props.options,
      { textKey, valueKey, childrenKey },
      value || []
    )

    // sync props.value to inner value
    useUpdateEffect(() => {
      if (props.value === undefined) return // uncontroll mode
      if (JSON.stringify(value) !== JSON.stringify(props.value)) {
        setValue(props.value)
      }
    }, [props.value])

    // sync value to cascader value
    useEffect(() => {
      if (!popup && JSON.stringify(innerValue) !== JSON.stringify(value)) {
        setInnerValue(value)
      }
    }, [value])

    // only sync value to popup cascader value when visible change
    useEffect(() => {
      if (popup && JSON.stringify(innerValue) !== JSON.stringify(value)) {
        setInnerValue(value)
      }
    }, [visible])

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

    const onClose = () => {
      props.onClose?.()
      actions.close()
    }

    const onFinish = useMemoizedFn((val, selectedRows) => {
      setValue(val)
      props.onFinish?.(val, selectedRows)
      actions.close()
    })

    const onChange = useMemoizedFn((val, selectedRows) => {
      setInnerValue(val)
      if (popup) {
        if (visible) props.onChange?.(val, selectedRows)
      } else {
        props.onChange?.(val, selectedRows)
      }
    })

    useImperativeHandle(ref, () => actions)

    const content = (
      <Cascader
        value={innerValue}
        {...cascaderProps}
        onChange={onChange}
        onFinish={onFinish}
        onClose={onClose}
      />
    )

    if (!popup) return content

    const popupProps = isObject(popup)
      ? { closeOnClickOverlay: true, ...popup }
      : { closeOnClickOverlay: true }

    return (
      <>
        <Popup
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
        {props.children?.(value, items, actions)}
      </>
    )
  }
)

export default CascaderPopup

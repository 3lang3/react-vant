import React from 'react'
import { Cross } from '@react-vant/icons'
import clsx from 'clsx'
import { ActionSheetProps, ActionSheetAction } from './PropsType'
import { createNamespace, pick } from '../utils'
import Loading from '../loading'
import Popup from '../popup'
import { sharedPopupProps } from '../popup/Popup'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('action-sheet')

const ActionSheet: React.FC<ActionSheetProps> = p => {
  const props = mergeProps(p, {
    closeable: true,
    safeAreaInsetBottom: true,
    round: true,
    lockScroll: true,
    overlay: true,
    closeOnClickOverlay: true,
    closeIcon: <Cross />,
  })
  const onCancel = () => {
    props.onClose?.()
    props.onCancel?.()
  }

  const renderHeader = () => {
    if (!props.title) return null
    return (
      <div className={clsx(bem('header'))}>
        {props.title}
        {props.closeable &&
          React.cloneElement(props.closeIcon as React.ReactElement, {
            className: clsx(bem('clear')),
            onClick: onCancel,
          })}
      </div>
    )
  }

  const renderCancel = () => {
    if (!props.cancelText) return null
    return [
      <div key='cancel-gap' className={clsx(bem('gap'))} />,
      <button
        key='cancel-btn'
        type='button'
        className={clsx(bem('cancel'))}
        onClick={onCancel}
      >
        {props.cancelText}
      </button>,
    ]
  }

  const renderOption = (item: ActionSheetAction, index: number) => {
    const {
      name,
      color,
      subname,
      loading,
      callback,
      disabled,
      className,
      style,
    } = item

    const Content = loading ? (
      <Loading className={clsx(bem('loading-icon'))} />
    ) : (
      [
        <span key={`${index}-1`} className={clsx(bem('name'))}>
          {name}
        </span>,
        subname && (
          <div key={`${index}-2`} className={clsx(bem('subname'))}>
            {subname}
          </div>
        ),
      ]
    )

    const onClick = () => {
      if (disabled || loading) {
        return
      }

      if (callback) {
        callback(item)
      }

      if (props.closeOnClickAction) {
        onCancel()
      }
      setTimeout(() => {
        props.onSelect?.(item, index)
      }, 0)
    }

    return (
      <button
        key={index}
        type='button'
        style={{ color, ...style }}
        className={clsx(bem('item', { loading, disabled }), className)}
        onClick={onClick}
      >
        {Content}
      </button>
    )
  }

  const renderDescription = () => {
    if (props.description) {
      return <div className={clsx(bem('description'))}>{props.description}</div>
    }
    return null
  }

  const renderOptions = () => {
    if (props.actions) {
      return props.actions.map(renderOption)
    }
    return null
  }

  return (
    <Popup
      visible={props.visible}
      className={clsx(bem('wrapper'))}
      position='bottom'
      {...pick(props, sharedPopupProps)}
      onClose={onCancel}
      closeable={false}
    >
      <div className={clsx(bem(), props.className)} style={props.style}>
        {renderHeader()}
        {renderDescription()}
        <div className={clsx(bem('content'))}>
          {renderOptions()}
          {props.children}
        </div>
        {renderCancel()}
      </div>
    </Popup>
  )
}

export default ActionSheet

import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Cross, Success } from '@react-vant/icons'

import Popup from '../popup'
import Loading from '../loading'

import { lockClick } from './lock-click'
import { createNamespace, isDef } from '../utils'
import type { ToastPrivateProps, ToastProps } from './PropsType'
import { mergeProps } from '../utils/get-default-props'
const [bem] = createNamespace('toast')

const Toast: React.FC<
  ToastProps & ToastPrivateProps & { visible?: boolean }
> = p => {
  const props = mergeProps(p, {
    type: 'info',
    duration: 2000,
    position: 'middle',
    transition: 'rv-fade',
    loadingType: 'circular',
    overlay: false,
  })
  const onClick = () => {
    if (props.closeOnClick) {
      props.onClose()
    }
  }

  useEffect(() => {
    if (!props.visible) {
      lockClick(false)
      return
    }
    let clickable = false
    const newValue = props.visible && props.forbidClick
    if (clickable !== newValue) {
      clickable = newValue
      lockClick(clickable)
    }
  }, [props.visible, props.forbidClick])

  const renderIcon = () => {
    const { icon, type, iconSize, loadingType } = props
    const hasIcon = icon || type === 'success' || type === 'fail'
    if (hasIcon) {
      const buildInIcon = type === 'fail' ? <Cross /> : <Success />
      return React.cloneElement((icon || buildInIcon) as React.ReactElement, {
        className: clsx(bem('icon')),
        fontSize: iconSize,
      })
    }

    if (type === 'loading') {
      return <Loading className={clsx(bem('loading'))} type={loadingType} />
    }

    return null
  }

  const renderMessage = () => {
    const { message } = props
    if (isDef(message) && message !== '') {
      return <div className={clsx(bem('info'))}>{message}</div>
    }
    return null
  }

  return (
    <Popup
      className={clsx([
        bem([props.position, { [props.type]: !props.icon }]),
        props.className,
      ])}
      visible={props.visible}
      overlay={props.overlay}
      transition={props.transition}
      overlayClass={props.overlayClass}
      overlayStyle={props.overlayStyle}
      closeOnClickOverlay={props.closeOnClickOverlay}
      lockScroll={false}
      onClick={onClick}
      onClose={props.onClose}
      onClosed={props.onClosed}
      onOpened={props.onOpened}
      teleport={props.teleport}
    >
      {renderIcon()}
      {renderMessage()}
    </Popup>
  )
}

export default Toast

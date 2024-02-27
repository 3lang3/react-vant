import React, { useContext } from 'react'
import clsx from 'clsx'

import Popup from '../popup'
import Button from '../button'
import ActionBar from '../action-bar'

import { DialogProps, DialogStatic } from './PropsType'
import { addUnit, createNamespace, noop } from '../utils'
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant'
import ConfigProviderContext from '../config-provider/ConfigProviderContext'
import { mergeProps } from '../utils/get-default-props'

const [bem] = createNamespace('dialog')

const Dialog: React.FC<DialogProps> = p => {
  const { locale } = useContext(ConfigProviderContext)
  const props = mergeProps(p, {
    transition: 'rv-dialog-bounce',
    showConfirmButton: true,
    closeOnPopstate: true,
  })
  const {
    width,
    title,
    theme,
    visible,
    message,
    className,
    messageAlign,
    closeOnClickOverlay,
    onClickCloseIcon,
    ...others
  } = props

  const renderTitle = () => {
    if (props.title) {
      return (
        <div
          className={clsx(
            bem('header', {
              isolated: !props.message && !props.children,
            })
          )}
        >
          {title}
        </div>
      )
    }
    return null
  }

  const renderContent = () => {
    if (props.children) {
      return <div className={clsx(bem('content'))}>{props.children}</div>
    }
    if (message) {
      return (
        <div className={clsx(bem('content', { isolated: !title }))}>
          <div
            className={clsx(
              bem('message', {
                'has-title': title,
                [messageAlign]: messageAlign,
              })
            )}
          >
            {message}
          </div>
        </div>
      )
    }

    return null
  }

  const renderButtons = () => (
    <div className={clsx(BORDER_TOP, bem('footer'))}>
      {props.showCancelButton && (
        <Button
          size='large'
          text={props.cancelButtonText || locale.cancel}
          className={clsx(bem('cancel'))}
          style={{ color: props.cancelButtonColor }}
          loading={props.cancelProps?.loading}
          disabled={props.cancelProps?.disabled}
          onClick={props.cancelProps?.loading ? noop : props.onCancel}
        />
      )}
      {props.showConfirmButton && (
        <Button
          size='large'
          text={props.confirmButtonText || locale.confirm}
          className={clsx(bem('confirm'), {
            [BORDER_LEFT]: props.showCancelButton,
          })}
          round={theme === 'round-button' || undefined}
          style={{ color: props.confirmButtonColor }}
          loading={props.confirmProps?.loading}
          disabled={props.confirmProps?.disabled}
          onClick={props.confirmProps?.loading ? noop : props.onConfirm}
        />
      )}
    </div>
  )

  const renderRoundButtons = () => (
    <ActionBar className={clsx(bem('footer'))}>
      {props.showCancelButton && (
        <ActionBar.Button
          type='warning'
          text={props.cancelButtonText || locale.cancel}
          className={clsx(bem('cancel'))}
          color={props.cancelButtonColor}
          loading={props.cancelProps?.loading}
          disabled={props.cancelProps?.disabled}
          onClick={props.cancelProps?.loading ? noop : props.onCancel}
        />
      )}
      {props.showConfirmButton && (
        <ActionBar.Button
          type='danger'
          text={props.confirmButtonText || locale.confirm}
          className={clsx(bem('confirm'))}
          color={props.confirmButtonColor}
          loading={props.confirmProps?.loading}
          disabled={props.confirmProps?.disabled}
          onClick={props.confirmProps?.loading ? noop : props.onConfirm}
        />
      )}
    </ActionBar>
  )

  const renderFooter = () => {
    if (props.footer) return props.footer
    return props.theme === 'round-button'
      ? renderRoundButtons()
      : renderButtons()
  }

  return (
    <Popup
      {...others}
      visible={visible}
      className={clsx(bem([theme]), className)}
      style={{ width: addUnit(width) }}
      aria-labelledby={title || message}
      closeOnClickOverlay={closeOnClickOverlay}
      onClickCloseIcon={onClickCloseIcon}
      onClose={props.onClose}
      onClosed={props.onClosed}
    >
      {renderTitle()}
      {renderContent()}
      {renderFooter()}
    </Popup>
  )
}

export default Dialog as React.FC<DialogProps> & DialogStatic

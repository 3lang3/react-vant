import React from 'react';
import classnames from 'classnames';

import Icon from '../icon';
import Popup from '../popup';
import Button from '../button';

import { DialogProps, DialogStatic } from './PropsType';
import { createNamespace, addUnit, noop } from '../utils';
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant';

const [bem] = createNamespace('dialog');

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    width,
    title,
    theme,
    visible,
    message,
    className,
    messageAlign,
    closeIcon,
    closeable,
    closeOnClickOverlay,
    onClickCloseIcon,
    ...others
  } = props;

  const renderTitle = () => {
    if (props.title) {
      return (
        <div
          className={classnames(
            bem('header', {
              isolated: !props.message && !props.children,
            }),
          )}
        >
          {title}
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    if (props.children) {
      return <div className={classnames(bem('content'))}>{props.children}</div>;
    }
    if (message) {
      return (
        <div className={classnames(bem('content', { isolated: !title }))}>
          <div
            className={classnames(
              bem('message', {
                'has-title': title,
                [messageAlign]: messageAlign,
              }),
            )}
          >
            {message}
          </div>
        </div>
      );
    }

    return null;
  };

  const renderButtons = () => (
    <div className={classnames(theme === 'round-button' ? '' : BORDER_TOP, bem('footer'))}>
      {props.showCancelButton && (
        <Button
          size="large"
          text={props.cancelButtonText || '取消'}
          className={classnames(bem('cancel'))}
          style={{ color: props.cancelButtonColor }}
          loading={props.cancelProps?.loading}
          disabled={props.cancelProps?.disabled}
          onClick={props.cancelProps?.loading ? noop : props.onCancel}
        />
      )}
      {props.showConfirmButton && (
        <Button
          size="large"
          type={theme === 'round-button' ? 'primary' : 'default'}
          text={props.confirmButtonText || '确认'}
          className={classnames(
            bem('confirm'),
            theme === 'round-button' ? '' : { [BORDER_LEFT]: props.showCancelButton },
          )}
          round={theme === 'round-button'}
          style={{ color: props.confirmButtonColor }}
          loading={props.confirmProps?.loading}
          disabled={props.confirmProps?.disabled}
          onClick={props.confirmProps?.loading ? noop : props.onConfirm}
        />
      )}
    </div>
  );

  const renderCloseIcon = () => {
    if (closeable) {
      return (
        <Icon
          name={closeIcon}
          className={classnames(bem('close-icon'))}
          onClick={() => {
            if (onClickCloseIcon) {
              onClickCloseIcon();
            }
            props.onClose?.();
          }}
        />
      );
    }
    return null;
  };

  return (
    <Popup
      {...others}
      visible={visible}
      className={classnames(bem([theme]), className)}
      style={{ width: addUnit(width) }}
      aria-labelledby={title || message}
      closeOnClickOverlay={closeOnClickOverlay}
      onClose={props.onClose}
      onClosed={props.onClosed}
    >
      {renderCloseIcon()}
      {renderTitle()}
      {renderContent()}
      {renderButtons()}
    </Popup>
  );
};

Dialog.defaultProps = {
  closeIcon: 'cross',
  transition: 'rv-dialog-bounce',
  showConfirmButton: true,
  closeOnPopstate: true,
  teleport: document.body,
};

export default Dialog as React.FC<DialogProps> & DialogStatic;

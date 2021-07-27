import React, { useState } from 'react';
import classnames from 'classnames';

import Icon from '../icon';
import Popup from '../popup';
import Button from '../button';

import { DialogProps, DialogStatic } from './PropsType';
import { createNamespace, addUnit } from '../utils';
import { callInterceptor } from '../utils/interceptor';
import { BORDER_TOP, BORDER_LEFT } from '../utils/constant';

const [bem] = createNamespace('dialog');

const Dialog: React.FC<DialogProps> & DialogStatic = (props) => {
  const {
    width,
    title,
    theme,
    show,
    message,
    className,
    messageAlign,
    closeIcon,
    closeable,
    onClickCloseIcon,
    ...others
  } = props;

  const [loading, setLoading] = useState({ confirm: false, cancel: false });

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

  const close = (action: string) => {
    props.onClose();
    if (props.callback) {
      props.callback(action);
    }
  };

  const handleAction = (action) => {
    // should not trigger close event when hidden
    if (!props.show) {
      return;
    }

    const event = `on${action.slice(0, 1).toUpperCase()}${action.slice(1)}`;

    if (props[event]) {
      props[event]();
    }

    if (props.beforeClose) {
      setLoading({ ...loading, [`${action}`]: true });
      callInterceptor({
        interceptor: props.beforeClose,
        args: [action],
        done() {
          close(action);
          setLoading({ ...loading, [`${action}`]: false });
        },
        canceled() {
          setLoading({ ...loading, [`${action}`]: false });
        },
      });
    } else {
      close(action);
    }
  };

  const renderButtons = () => (
    <div className={classnames(theme === 'round-button' ? '' : BORDER_TOP, bem('footer'))}>
      {props.showCancelButton && (
        <Button
          size="large"
          text={props.cancelButtonText || '取消'}
          className={classnames(bem('cancel'))}
          style={{ color: props.cancelButtonColor }}
          loading={loading.cancel}
          onClick={() => {
            handleAction('cancel');
          }}
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
          loading={loading.confirm}
          onClick={() => {
            handleAction('confirm');
          }}
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
            props.onClose();
          }}
        />
      );
    }
    return null;
  };

  return (
    <Popup
      {...others}
      visible={show}
      className={classnames(bem([theme]), className)}
      style={{ width: addUnit(width) }}
      aria-labelledby={title || message}
      overlayClosable={false}
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
  showConfirmButton: true,
};

export default Dialog;

import React, { useEffect } from 'react';
import classnames from 'classnames';

import Icon from '../icon';
import Popup from '../popup';
import Loading from '../loading';

import { lockClick } from './lock-click';
import { createNamespace, isDef } from '../utils';
import { ToastProps } from './PropsType';

const [bem] = createNamespace('toast');

const Toast: React.FC<ToastProps> = (props) => {
  let timer: NodeJS.Timeout;
  let clickable = false;

  const toggleClickable = () => {
    const newValue = props.visible && props.forbidClick;
    if (clickable !== newValue) {
      clickable = newValue;
      lockClick(clickable);
    }
    if (!props.visible) {
      lockClick(false);
    }
  };

  const clearTimer = () => {
    clearTimeout(timer);
  };

  useEffect(() => {
    return clearTimer;
  });

  useEffect(() => {
    toggleClickable();
  }, [props.visible, props.forbidClick]);

  useEffect(() => {
    clearTimer();
    if (props.visible && props.duration > 0) {
      timer = setTimeout(() => {
        props.close();
        props.onClose?.();
      }, props.duration);
    }
  }, [props.visible, props.duration]);

  const renderIcon = () => {
    const { icon, type, iconPrefix, iconSize, loadingType } = props;
    const hasIcon = icon || type === 'success' || type === 'fail';
    if (hasIcon) {
      return (
        <Icon
          name={icon || (type === 'fail' ? 'cross' : type)}
          size={iconSize}
          className={classnames(bem('icon'))}
          classPrefix={iconPrefix}
        />
      );
    }

    if (type === 'loading') {
      return <Loading className={classnames(bem('loading'))} type={loadingType} />;
    }

    return null;
  };

  const renderMessage = () => {
    const { message } = props;

    if (isDef(message) && message !== '') {
      return <div className={classnames(bem('info'))}>{message}</div>;
    }
    return null;
  };

  return (
    <Popup
      visible={props.visible}
      className={classnames([
        bem([props.position, { [props.type]: !props.icon }]),
        props.className,
      ])}
      overlay={false}
      lockScroll={false}
      onClosed={clearTimer}
    >
      {renderIcon()}
      {renderMessage()}
    </Popup>
  );
};

Toast.defaultProps = {
  loadingType: 'spinner',
};

export default Toast;

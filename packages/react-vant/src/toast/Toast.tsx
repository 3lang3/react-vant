/* eslint-disable react/default-props-match-prop-types */
import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';

import Icon from '../icon';
import Popup from '../popup';
import Loading from '../loading';

import { lockClick } from './lock-click';
import { isDef } from '../utils';
import { ToastPrivateProps, ToastProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

// eslint-disable-next-line react/require-default-props
const Toast: React.FC<ToastProps & ToastPrivateProps & { visible?: boolean }> = (props) => {
  let clickable = false;

  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('toast', prefixCls);

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

  const onClick = () => {
    if (props.closeOnClick) {
      props.onClose();
    }
  };

  useEffect(() => {
    toggleClickable();
  }, [props.visible, props.forbidClick]);

  const renderIcon = () => {
    const { icon, type, iconPrefix, iconSize, loadingType } = props;
    const hasIcon = icon || type === 'success' || type === 'fail';
    if (hasIcon) {
      return typeof icon === 'string' ? (
        <Icon
          name={icon || (type === 'fail' ? 'cross' : type)}
          size={iconSize}
          className={clsx(bem('icon'))}
          classPrefix={iconPrefix}
        />
      ) : (
        icon
      );
    }

    if (type === 'loading') {
      return <Loading className={clsx(bem('loading'))} type={loadingType} />;
    }

    return null;
  };

  const renderMessage = () => {
    const { message } = props;
    if (isDef(message) && message !== '') {
      return <div className={clsx(bem('info'))}>{message}</div>;
    }
    return null;
  };

  return (
    <Popup
      className={clsx([bem([props.position, { [props.type]: !props.icon }]), props.className])}
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
  );
};

Toast.defaultProps = {
  type: 'info',
  duration: 2000,
  position: 'middle',
  transition: 'rv-fade',
  loadingType: 'circular',
  overlay: false,
};

export default Toast;

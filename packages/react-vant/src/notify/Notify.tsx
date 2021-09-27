import React, { useContext } from 'react';
import cls from 'classnames';
import Popup from '../popup';
import { NotifyPrivateProps, NotifyProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Notify: React.FC<NotifyProps & NotifyPrivateProps> = ({ children, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('notify', prefixCls);

  const style = {
    color: props.color,
    background: props.background,
  };

  return (
    <Popup
      visible={props.visible}
      className={cls(bem([props.type]), props.className)}
      style={style}
      overlay={false}
      position="top"
      lockScroll={props.lockScroll}
      onClick={props.onClick}
      onClose={props.onClose}
      onClosed={props.onClosed}
      teleport={props.teleport}
    >
      {children || props.message}
    </Popup>
  );
};

Notify.defaultProps = {
  type: 'danger',
  duration: 3000,
  color: 'white',
  lockScroll: false,
};

export default Notify;

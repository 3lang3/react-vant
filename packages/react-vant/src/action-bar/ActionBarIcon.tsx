import React, { isValidElement, useContext } from 'react';
import clsx from 'clsx';
import { ActionBarIconProps } from './PropsType';
import { Icon } from '../icon';
import Badge from '../badge';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const ActionBarIcon: React.FC<ActionBarIconProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('action-bar-icon', prefixCls);

  const renderIcon = () => {
    const { badge, icon, color, iconClass, iconPrefix } = props;
    if (typeof icon === 'string') {
      return (
        <Icon
          tag="div"
          name={icon}
          badge={badge}
          color={color}
          className={clsx(bem('icon'), iconClass)}
          classPrefix={iconPrefix}
        />
      );
    }
    if (isValidElement(icon)) {
      return (
        <Badge {...badge} className={clsx(bem('icon'))}>
          {icon}
        </Badge>
      );
    }
    return null;
  };

  return (
    <div
      role="button"
      className={clsx(props.className, bem())}
      style={props.style}
      tabIndex={0}
      onClick={props.onClick}
    >
      {renderIcon()}
      {props.children || props.text}
    </div>
  );
};

export default ActionBarIcon;

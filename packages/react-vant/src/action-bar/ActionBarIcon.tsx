import React, { isValidElement } from 'react';
import classnames from 'classnames';
import { ActionBarIconProps } from './PropsType';
import { createNamespace } from '../utils';
import { Icon } from '../icon';
import Badge from '../badge';

const [bem] = createNamespace('action-bar-icon');

const ActionBarIcon: React.FC<ActionBarIconProps> = (props) => {
  const renderIcon = () => {
    const { badge, icon, color, iconClass, iconPrefix } = props;
    if (typeof icon === 'string') {
      return (
        <Icon
          tag="div"
          name={icon}
          badge={badge}
          color={color}
          className={classnames(bem('icon'), iconClass)}
          classPrefix={iconPrefix}
        />
      );
    }
    if (isValidElement(icon)) {
      return (
        <Badge {...badge} className={classnames(bem('icon'))}>
          {icon}
        </Badge>
      );
    }
    return null;
  };

  return (
    <div
      role="button"
      className={classnames(props.className, bem())}
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

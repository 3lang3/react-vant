import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import { createNamespace, isDef } from '../utils';
import { CellProps } from './PropsType';

const [bem] = createNamespace('cell');

const Cell: React.FC<CellProps> & { Group?: React.FC } = (props) => {
  const renderLabel = () => {
    const showLabel = props.labelSlot || isDef(props.label);

    if (showLabel) {
      return (
        <div className={classnames(bem('label'), props.labelClass)}>
          {props.labelSlot ? props.labelSlot() : props.label}
        </div>
      );
    }
    return null;
  };

  const renderTitle = () => {
    if (props.titleSlot || isDef(props.title)) {
      return (
        <div className={classnames(bem('title'), props.titleClass)} style={props.titleStyle}>
          {props.titleSlot ? props.titleSlot() : <span>{props.title}</span>}
          {renderLabel()}
        </div>
      );
    }
    return null;
  };

  const renderValue = () => {
    const hasTitle = isDef(props.title);
    const hasValue = props.children || isDef(props.value);

    if (hasValue) {
      return (
        <div className={classnames(bem('value', { alone: !hasTitle }), props.valueClass)}>
          {props.children ? props.children : <span>{props.value}</span>}
        </div>
      );
    }
    return null;
  };

  const renderLeftIcon = () => {
    if (props.iconSlot) {
      return props.iconSlot();
    }

    if (props.icon) {
      return (
        <Icon
          name={props.icon}
          className={classnames(bem('left-icon'))}
          classPrefix={props.iconPrefix}
        />
      );
    }
    return null;
  };

  const renderRightIcon = () => {
    if (props.rightIconSlot) {
      return props.rightIconSlot();
    }

    if (props.isLink) {
      const name = props.arrowDirection ? `arrow-${props.arrowDirection}` : 'arrow';
      return <Icon name={name} className={classnames(bem('right-icon'))} />;
    }
    return null;
  };

  const { className, size, center, border = true, isLink, required, onClick } = props;
  const clickable = isLink || props.clickable;

  const classes: Record<string, boolean | undefined> = {
    center,
    required,
    clickable,
    borderless: !border,
  };
  if (size) {
    classes[size] = !!size;
  }
  return (
    <div
      className={classnames(bem(classes), className)}
      role={clickable ? 'button' : undefined}
      onClick={onClick}
    >
      {renderLeftIcon()}
      {renderTitle()}
      {renderValue()}
      {renderRightIcon()}
    </div>
  );
};

export default Cell;

import React, { isValidElement } from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import { createNamespace, isDef } from '../utils';
import { CellProps } from './PropsType';

const [bem] = createNamespace('cell');

const Cell: React.FC<CellProps> = (props) => {
  const renderLabel = () => {
    const showLabel = isDef(props.label);

    if (showLabel) {
      return <div className={classnames(bem('label'), props.labelClass)}>{props.label}</div>;
    }
    return null;
  };

  const renderTitle = () => {
    if (isDef(props.title)) {
      return (
        <div className={classnames(bem('title'), props.titleClass)} style={props.titleStyle}>
          {props.title}
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
    if (typeof props.icon === 'string') {
      return (
        <Icon
          name={props.icon}
          className={classnames(bem('left-icon'))}
          classPrefix={props.iconPrefix}
        />
      );
    }

    if (isValidElement(props.icon)) {
      return props.icon;
    }

    return null;
  };

  const renderRightIcon = () => {
    if (props.rightIcon) {
      return props.rightIcon;
    }

    if (props.isLink) {
      const name = props.arrowDirection ? `arrow-${props.arrowDirection}` : 'arrow';
      return <Icon name={name} className={classnames(bem('right-icon'))} />;
    }
    return null;
  };

  const { className, style, size, center, border = true, isLink, required, onClick } = props;
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
      style={style}
      className={classnames(bem(classes), className)}
      role={clickable ? 'button' : undefined}
      onClick={onClick}
    >
      {renderLeftIcon()}
      {renderTitle()}
      {renderValue()}
      {renderRightIcon()}
      {props.extra}
    </div>
  );
};

export default Cell;

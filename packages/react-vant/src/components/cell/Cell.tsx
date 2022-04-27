import React, { useContext } from 'react';
import clsx from 'clsx';
import { Arrow, ArrowDown, ArrowLeft, ArrowUp } from '@react-vant/icons';
import { isDef } from '../utils';
import { CellProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Cell: React.FC<CellProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('cell', prefixCls);

  const renderLabel = () => {
    const showLabel = isDef(props.label);

    if (showLabel) {
      return <div className={clsx(bem('label'), props.labelClass)}>{props.label}</div>;
    }
    return null;
  };

  const renderTitle = () => {
    if (isDef(props.title)) {
      return (
        <div className={clsx(bem('title'), props.titleClass)} style={props.titleStyle}>
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
        <div className={clsx(bem('value', { alone: !hasTitle }), props.valueClass)}>
          {props.children ? props.children : <span>{props.value}</span>}
        </div>
      );
    }
    return null;
  };

  const renderLeftIcon = () => {
    if (props.icon) {
      return React.cloneElement(props.icon as React.ReactElement, {
        className: clsx(bem('left-icon')),
      });
    }
    return null;
  };

  const renderRightIcon = () => {
    if (props.rightIcon) {
      return props.rightIcon;
    }

    if (props.isLink) {
      const className = clsx(bem('right-icon'));
      if (props.arrowDirection === 'left') return <ArrowLeft className={className} />;
      if (props.arrowDirection === 'up') return <ArrowUp className={className} />;
      if (props.arrowDirection === 'down') return <ArrowDown className={className} />;
      return <Arrow className={className} />;
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
      className={clsx(bem(classes), className)}
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

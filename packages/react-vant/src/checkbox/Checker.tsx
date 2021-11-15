import React, { useMemo, useRef } from 'react';
import type { MouseEvent } from 'react';
import clsx from 'clsx';

import Icon from '../icon';
import { CheckerProps } from './PropsType';
import { addUnit } from '../utils';

const Checker: React.FC<CheckerProps<{}>> = (props) => {
  const iconRef = useRef(null);

  const getParentProp = (name: string) => {
    if (props.parent && props.bindGroup) {
      return props.parent.props[name];
    }
    return null;
  };

  const disabled = useMemo(
    () => getParentProp('disabled') || props.disabled,
    [props.parent, props.disabled],
  );
  const direction = useMemo(() => getParentProp('direction') || null, [props.parent]);

  const iconStyle = useMemo(() => {
    const checkedColor = props.checkedColor || getParentProp('checkedColor');
    if (checkedColor && props.checked && !disabled) {
      return {
        borderColor: checkedColor,
        backgroundColor: checkedColor,
      };
    }
    return {};
  }, [props.checkedColor, props.checked, disabled]);

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const { target } = event;
    const icon = iconRef.current;
    const iconClicked = icon === target || icon!.contains(target as Node);

    if (!disabled && (iconClicked || !props.labelDisabled)) {
      if (props.onToggle) {
        props.onToggle();
      }
    }
    if (props.onClick) {
      props.onClick(event);
    }
  };

  const renderIcon = () => {
    const { bem, shape, checked } = props;
    const iconSize = props.iconSize || getParentProp('iconSize');

    return (
      <div
        ref={iconRef}
        className={clsx(bem('icon', [shape, { disabled, checked }]))}
        style={{ fontSize: addUnit(iconSize) }}
      >
        {props.iconRender ? (
          props.iconRender({ checked, disabled })
        ) : (
          <Icon name="success" style={iconStyle} />
        )}
      </div>
    );
  };

  const renderLabel = () => {
    if (props.children) {
      return (
        <span className={props.bem('label', [props.labelPosition, { disabled }])}>
          {props.children}
        </span>
      );
    }
    return null;
  };

  return (
    <div
      role={props.role}
      className={clsx(
        props.bem([
          {
            disabled,
            'label-disabled': props.labelDisabled,
          },
          direction,
        ]),
        props.className,
      )}
      tabIndex={disabled ? -1 : 0}
      aria-checked={props.checked}
      onClick={onClick}
    >
      {props.labelPosition === 'left' && renderLabel()}
      {renderIcon()}
      {props.labelPosition !== 'left' && renderLabel()}
    </div>
  );
};

Checker.defaultProps = {
  shape: 'round',
  bindGroup: true,
};

export default Checker;

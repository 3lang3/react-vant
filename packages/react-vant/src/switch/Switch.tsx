import React, { useContext, useMemo } from 'react';
import type { CSSProperties } from 'react';
import clsx from 'clsx';

import useMergedState from '../hooks/use-merged-state';
import Loading from '../loading';

import { SwitchProps } from './PropsType';
import { addUnit } from '../utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Swtich: React.FC<SwitchProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('switch', prefixCls);

  const { loading, disabled, size, activeColor, inactiveColor } = props;

  const [checked, setChecked] = useMergedState({
    value: props.checked,
    defaultValue: props.defaultChecked,
  });

  const isChecked = useMemo(() => checked === props.activeValue, [checked, props.activeValue]);

  const style: CSSProperties = {
    fontSize: addUnit(size),
    backgroundColor: isChecked ? activeColor : inactiveColor,
    ...props.style,
  };

  const onClick = (e) => {
    if (!props.disabled) {
      props.onClick?.(e);
    }
    if (!props.disabled && !props.loading) {
      const newValue = isChecked ? props.inactiveValue : props.activeValue;

      setChecked(newValue);
      props.onChange?.(newValue);
    }
  };

  const renderLoading = () => {
    if (props.loading) {
      const color = isChecked ? props.activeColor : props.inactiveColor;
      return <Loading className={clsx(bem('loading'))} color={color} />;
    }
    return null;
  };

  return (
    <div
      role="switch"
      tabIndex={0}
      className={clsx(
        props.className,
        bem({
          on: isChecked,
          loading,
          disabled,
        }),
      )}
      style={style}
      aria-checked={isChecked}
      onClick={onClick}
    >
      <div className={clsx(bem('node'))}>{renderLoading()}</div>
    </div>
  );
};

Swtich.defaultProps = {
  activeValue: true,
  inactiveValue: false,
};

export default Swtich;

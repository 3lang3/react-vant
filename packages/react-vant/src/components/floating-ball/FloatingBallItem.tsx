import React, { useContext } from 'react';
import clsx from 'clsx';

import FloatingBallContext from './FloatingBallContext';
import { FloatingBallItemProps } from './PropsType';

export default (props: FloatingBallItemProps) => {
  const parent = useContext(FloatingBallContext);
  const handleItemClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!props.disabled) {
      typeof props.onClick === 'function' && props.onClick();
    }
    parent?.close();
  };

  const handleClassName = () => {
    const val = [];
    props.disabled && val.push('disabled');
    return val;
  };

  return (
    <div
      style={{ backgroundColor: props.color }}
      className={clsx('item', ...handleClassName())}
      onClick={event => handleItemClick(event)}
    >{props.children}</div>
  );
};
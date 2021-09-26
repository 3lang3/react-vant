import React from 'react';
import cls from 'classnames';
import { createNamespace } from '../utils';

import { StepsProps } from './PropsType';

const [bem] = createNamespace('steps');

const Steps: React.FC<StepsProps> = ({ children, className, style, ...props }) => {
  return (
    <div className={cls(className, bem([props.direction]))} style={style}>
      <div className={cls(bem('items'))}>
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((child: React.ReactElement, index: number) =>
            React.cloneElement(child, {
              index,
              parent: props,
            }),
          )}
      </div>
    </div>
  );
};

Steps.defaultProps = {
  active: 0,
  direction: 'horizontal',
  activeIcon: 'checked',
};

export default Steps;

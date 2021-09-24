import React from 'react';
import cls from 'classnames';
import { createNamespace } from '../utils';

import { SidebarProps } from './PropsType';
import useMergedState from '../hooks/use-merged-state';

const [bem] = createNamespace('sidebar');

const Sidebar: React.FC<SidebarProps> = ({ children, className, style, ...props }) => {
  const [active, updateActive] = useMergedState({
    value: props.value,
    defaultValue: props.defaultValue,
  });

  const getActive = () => active;

  const setActive = (value: number) => {
    if (value !== getActive()) {
      updateActive(value);
      props.onChange?.(value);
    }
  };
  return (
    <div style={style} className={cls(className, bem())}>
      {React.Children.toArray(children).filter(Boolean).map((child: React.ReactElement, index: number) =>
        React.cloneElement(child, {
          index,
          parent: {
            setActive,
            getActive,
          },
        }),
      )}
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import cls from 'classnames';
import { createNamespace } from '../utils';

import { SidebarProps } from './PropsType';

const [bem] = createNamespace('sidebar');

const Sidebar: React.FC<SidebarProps> = ({ children, className, style, ...props }) => {
  const [active, updateActive] = useState(() => +props.value);
  const getActive = () => active;

  const setActive = (value: number) => {
    if (value !== getActive()) {
      updateActive(value);
      props.onChange?.(value);
    }
  };
  return (
    <div style={style} className={cls(className, bem())}>
      {React.Children.map(children, (child: React.ReactElement, index: number) =>
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

Sidebar.defaultProps = {
  value: 0,
};

export default Sidebar;

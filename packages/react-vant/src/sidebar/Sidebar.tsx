import React, { useContext, useMemo } from 'react';
import cls from 'clsx';

import { SidebarItemProps, SidebarProps } from './PropsType';
import useMergedState from '../hooks/use-merged-state';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC<SidebarProps> = ({ children, className, style, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('sidebar', prefixCls);

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

  const validChildren = useMemo(
    () =>
      React.Children.toArray(children)
        .filter(Boolean)
        .map((child) => {
          if (!React.isValidElement(child)) return null;
          if (child.type !== SidebarItem) {
            if (process.env.NODE_ENV !== 'production') {
              // eslint-disable-next-line no-console
              console.error('[React Vant] <SidebarItem> must be a child component of <Sidebar>.');
            }
            return null;
          }
          return child;
        }),
    [children],
  );

  return (
    <div className={cls(className, bem('wrapper'))}>
      <div style={style} className={cls(className, bem())}>
        {validChildren.map((child: React.ReactElement, index: number) =>
          React.cloneElement(child, {
            index,
            parent: {
              setActive,
              getActive,
            },
          }),
        )}
      </div>
      {validChildren.map((child: React.ReactElement<SidebarItemProps>, index: number) => {
        return (
          <div
            className={cls(child.props.contentClassName, bem('content'))}
            key={child.key}
            style={{
              ...child.props.contentStyle,
              display: index === getActive() ? undefined : 'none',
            }}
          >
            {child.props.children}
          </div>
        );
      })}
    </div>
  );
};
Sidebar.defaultProps = {
  defaultValue: 0,
};
export default Sidebar;

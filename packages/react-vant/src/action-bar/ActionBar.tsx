import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import { ActionBarProps } from './PropsType';
import ActionBarContext from './ActionBarContext';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const ActionBar: React.FC<ActionBarProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('action-bar', prefixCls);

  const children = useMemo(() => React.Children.toArray(props.children), [props.children]);

  return (
    <ActionBarContext.Provider value={{ parent: { children } }}>
      <div
        className={clsx(props.className, bem(), {
          'rv-safe-area-bottom': props.safeAreaInsetBottom,
        })}
        style={props.style}
      >
        {React.Children.toArray(props.children)
          .filter(Boolean)
          .map((child: React.ReactElement, index: number) =>
            React.cloneElement(child, {
              index,
            }),
          )}
      </div>
    </ActionBarContext.Provider>
  );
};

ActionBar.defaultProps = {
  safeAreaInsetBottom: true,
};

export default ActionBar;

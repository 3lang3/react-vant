import React, { useState, useContext, useMemo, forwardRef } from 'react';
import clsx from 'clsx';

import TabsContext from './TabsContext';
import { TabPaneProps } from './PropsType';
import { useUpdateEffect } from '../hooks';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const TabPane = forwardRef<HTMLDivElement, TabPaneProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('tab', prefixCls);
  const parent = useContext(TabsContext);

  const [inited, setInited] = useState(false);

  const { animated, swipeable, scrollspy, lazyRender } = parent.props;
  const { index } = props;

  const getName = () => props.name ?? index;

  const init = () => {
    setInited(true);
  };

  const isActive = useMemo(() => {
    const active = getName() === parent.currentName;

    if (active && !inited) {
      init();
    }

    return active;
  }, [inited, parent.currentName]);

  useUpdateEffect(() => {
    parent.setLine();
    parent.scrollIntoView();
  }, [props.title]);

  const show = scrollspy || isActive;

  if (animated || swipeable) {
    return <div className={clsx(bem('pane'))}>{props.children}</div>;
  }

  const shouldRender = inited || scrollspy || !lazyRender;
  const Content = shouldRender ? props.children : null;

  return (
    <div
      ref={ref}
      style={{ display: show ? 'block' : 'none' }}
      role="tabpanel"
      className={clsx(bem('pane'))}
    >
      {Content}
    </div>
  );
});

TabPane.defaultProps = {
  showZeroBadge: true,
};

export default TabPane;

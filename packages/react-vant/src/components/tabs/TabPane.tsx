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

  const { animated, swipeable, scrollspy, lazyRender, lazyRenderPlaceholder } = parent.props;
  const { index } = props;

  const name = useMemo(() => props.name ?? index, [index, props.name]);

  const active = useMemo(() => name === parent.currentName, [name, parent.currentName]);

  const [inited, setInited] = useState(() => active);

  const init = () => {
    setInited(true);
  };

  const isActive = useMemo(() => {
    if (active && !inited) {
      init();
    }
    return active;
  }, [active, inited]);

  useUpdateEffect(() => {
    parent.setLine();
    parent.scrollIntoView();
  }, [props.title]);

  const show = scrollspy || isActive;

  const shouldRender = inited || scrollspy || !lazyRender;
  const Content = shouldRender ? props.children : lazyRenderPlaceholder;

  if (animated || swipeable) {
    return (
      <div ref={ref} role="tabpanel" className={clsx(bem('pane'))}>
        {Content}
      </div>
    );
  }

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

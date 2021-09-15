import React, { useState, useContext, useMemo, forwardRef } from 'react';
import classnames from 'classnames';

import TabsContext from './TabsContext';
import { TabPaneProps } from './PropsType';
import { createNamespace } from '../utils';
import { useUpdateEffect } from '../hooks';

const [bem] = createNamespace('tab');

const TabPane = forwardRef<HTMLDivElement, TabPaneProps>((props, ref) => {
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
    return <div className={classnames(bem('pane'))}>{props.children}</div>;
  }

  const shouldRender = inited || scrollspy || !lazyRender;
  const Content = shouldRender ? props.children : null;

  return (
    <div
      ref={ref}
      style={{ display: show ? 'block' : 'none' }}
      role="tabpanel"
      className={classnames(bem('pane'))}
    >
      {Content}
    </div>
  );
});

TabPane.defaultProps = {
  showZeroBadge: true,
};

export default TabPane;

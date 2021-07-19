import React, { useState, useContext, useMemo } from 'react';
import classnames from 'classnames';

import TabsContext from './TabsContext';
import { TabPaneProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('tab');

const TabPane: React.FC<TabPaneProps> = (props) => {
  const parent = useContext(TabsContext);

  const [inited, setInited] = useState(false);

  const { scrollspy } = parent.props;
  const { index } = props;

  const getName = () => props.name ?? index;

  const init = () => {
    setInited(true);

    if (parent.props.lazyRender) {
      // nextTick(() => {
      //   parent.emit('rendered', getName(), props.title);
      // });
    }
  };

  const isActive = useMemo(() => {
    const active = getName() === parent.currentName;

    if (active && !inited) {
      init();
    }

    return active;
  }, [parent.currentName]);

  const show = scrollspy || isActive;

  return (
    show && (
      <div role="tabpanel" className={classnames(bem('pane'))}>
        {props.children}
      </div>
    )
  );
};

export default TabPane;

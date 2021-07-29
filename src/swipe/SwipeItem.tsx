import React, { useMemo, useState, useContext, forwardRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import SwipeContext from './SwipeContext';

import { createNamespace } from '../utils';

const [bem] = createNamespace('swipe-item');

const SwipeItem = forwardRef<{}, { index?: number }>((props, ref) => {
  const context = useContext(SwipeContext);

  const [state, setState] = useState({
    offset: 0,
    inited: false,
  });
  const [rendered, setRendered] = useState(false);

  const customStyle = useMemo(() => {
    const style = {
      transform: '',
    };
    const { vertical, size } = context;

    style[vertical ? 'height' : 'width'] = `${size}px`;

    if (state.offset) {
      style.transform = `translate${vertical ? 'Y' : 'X'}(${state.offset}px)`;
    }

    return style;
  }, [context]);

  useImperativeHandle(ref, () => ({
    setOffset(offset: number) {
      setState({ ...state, offset });
    },
  }));

  const shouldRender = useMemo(() => {
    const { index } = props;
    const { loop, lazyRender, activeIndicator, count } = context;
    if (!lazyRender || rendered) {
      return true;
    }

    const active = activeIndicator;
    const maxActive = count - 1;
    const prevActive = active === 0 && loop ? maxActive : active - 1;
    const nextActive = active === maxActive && loop ? 0 : active + 1;

    setRendered(index === active || index === prevActive || index === nextActive);

    return index === active || index === prevActive || index === nextActive;
  }, [context.activeIndicator]);

  return (
    <div className={classnames(bem())} style={customStyle}>
      {shouldRender ? props.children : null}
    </div>
  );
});

export default SwipeItem;

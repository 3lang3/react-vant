import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useContext,
} from 'react';
import classnames from 'classnames';

import { getRect as getElementRect } from '../hooks/use-rect';
import useHeight from '../hooks/use-height';

import IndexBarContext from './IndexBarContext';

import { IndexAnchorProps } from './PropsType';
import { createNamespace, getScrollTop, getRootScrollTop } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';
import { useSetState } from '../hooks';

const [bem] = createNamespace('index-anchor');

const IndexAnchor: React.FC<IndexAnchorProps> = forwardRef((props, ref) => {
  const root = useRef();
  const height = useHeight(root);

  const context = useContext(IndexBarContext);

  if (!context) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('[React Vant] <IndexAnchor> must be a child component of <IndexBar>.');
    }
  }
  const [state, updateState] = useSetState({
    top: 0,
    left: 0,
    rect: { top: 0, height: 0 },
    width: 0,
    active: false,
  });
  const [rect, setRect] = useState({ top: 0, height: 0 });

  const isSticky = useMemo(() => state.active && context.sticky, [state.active, context.sticky]);

  const anchorStyle = useMemo(() => {
    const { zIndex, highlightColor } = context;

    if (isSticky) {
      return {
        zIndex: `${zIndex}`,
        left: state.left ? `${state.left}px` : null,
        width: state.width ? `${state.width}px` : null,
        transform: state.top ? `translate3d(0, ${state.top}px, 0)` : null,
        color: highlightColor,
      };
    }
    return null;
  }, [isSticky, state.width, state.left, state.top]);

  const getRect = (scrollParent: Element | Window, scrollParentRect) => {
    const rootRect = getElementRect(root.current);
    const newState = { ...state } as typeof state;
    newState.rect.height = rootRect.height;
    if (scrollParent === window || scrollParent === document.body) {
      newState.rect.top = rootRect.top + getRootScrollTop();
    } else {
      newState.rect.top = rootRect.top + getScrollTop(scrollParent) - scrollParentRect.top;
    }
    updateState(newState);
    return newState.rect;
  };

  useEffect(() => {
    setRect({ top: rect.top, height });
  }, [height]);

  useImperativeHandle(ref, () => ({
    getRect,
    state,
    updateState,
    root,
  }));

  const sticky = isSticky;
  return (
    <div
      className={props.className}
      ref={root}
      style={{ ...props.style, height: sticky ? `${state.rect.height}px` : null }}
    >
      <div
        style={anchorStyle as CSSProperties}
        className={classnames(bem({ sticky }), { [BORDER_BOTTOM]: sticky })}
      >
        {props.children || props.index}
      </div>
    </div>
  );
});

export default IndexAnchor;

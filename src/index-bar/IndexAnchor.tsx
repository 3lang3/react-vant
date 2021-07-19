/* eslint-disable react-hooks/rules-of-hooks */
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

import useRect from '../hooks/use-rect';
import useHeight from '../hooks/use-height';

import IndexBarContext from './IndexBarContext';

import { IndexAnchorProps } from './PropsType';
import { createNamespace, getScrollTop, getRootScrollTop } from '../utils';
import { BORDER_BOTTOM } from '../utils/constant';

const [bem] = createNamespace('index-anchor');

const IndexAnchor: React.FC<IndexAnchorProps> = forwardRef((props, ref) => {
  const root = useRef();
  const height = useHeight(root);

  const context = useContext(IndexBarContext);

  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);
  const [rect, setRect] = useState({ top: 0, height: 0 });

  const sticky = useMemo(() => active && context.sticky, [active]);

  const anchorStyle = useMemo(() => {
    const { zIndex, highlightColor } = context;

    if (sticky) {
      return {
        zIndex: `${zIndex}`,
        left: left ? `${left}px` : null,
        width: width ? `${width}px` : null,
        transform: top ? `translate3d(0, ${top}px, 0)` : null,
        color: highlightColor,
      };
    }
    return null;
  }, [sticky, width, left, top]);

  const getRect = (scrollParent: Element | Window, scrollParentRect) => {
    const rootRect = useRect(root.current);

    rect.height = rootRect.height;

    if (scrollParent === window || scrollParent === document.body) {
      rect.top = rootRect.top + getRootScrollTop();
    } else {
      rect.top = rootRect.top + getScrollTop(scrollParent) - scrollParentRect.top;
    }
    setRect({ ...rect });

    return rect;
  };

  useEffect(() => {
    setRect({ top: rect.top, height });
  }, [height]);

  useImperativeHandle(ref, () => ({
    getRect,
    setLeft,
    setTop,
    setWidth,
    setActive,
    root,
  }));

  return (
    <div ref={root} style={{ height: sticky ? `${rect.height}px` : null }}>
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

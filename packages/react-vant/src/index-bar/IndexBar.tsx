/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  forwardRef,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { MouseEvent } from 'react';
import clsx from 'clsx';

import useRefs from '../hooks/use-refs';
import { getRect } from '../hooks/use-rect';
import useTouch from '../hooks/use-touch';
import useScrollParent from '../hooks/use-scroll-parent';
import useEventListener from '../hooks/use-event-listener';

import IndexBarContext from './IndexBarContext';
import PopupContext from '../popup/PopupContext';

import { IndexBarInstance, IndexBarProps } from './PropsType';
import {
  isDef,
  isHidden,
  getScrollTop,
  preventDefault,
  setRootScrollTop,
  getRootScrollTop,
  setScrollTop,
} from '../utils';
import { useMount } from '../hooks';
import { renderToContainer } from '../utils/dom/renderToContainer';
import useSsrCompat from '../hooks/use-ssr-compat';
import { INDEX_ANCHORE_KEY } from './IndexAnchor';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { COMPONENT_TYPE_KEY } from '../utils/constant';

const IndexBar = forwardRef<IndexBarInstance, IndexBarProps>((props, ref) => {
  const popupContext = useContext(PopupContext);
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('index-bar', prefixCls);
  const { children, sticky, zIndex, highlightColor } = props;

  const [activeAnchor, setActiveAnchor] = useState<string | number>(null);

  const root = useRef<HTMLDivElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);
  const touchActiveIndex = useRef<number>(null);

  const touch = useTouch();
  const scrollParent = useScrollParent(root) as Element;
  const [refs, setRefs] = useRefs();

  const [ssrCompatRender] = useSsrCompat();

  const sidebarStyle = useMemo(() => {
    if (isDef(zIndex)) {
      return {
        zIndex: +zIndex + 1,
      };
    }
    return {};
  }, [zIndex]);

  const highlightStyle = useMemo(() => {
    if (highlightColor) {
      return {
        color: highlightColor,
      };
    }
    return {};
  }, [highlightColor]);

  const getScrollerRect = () => {
    if (scrollParent.getBoundingClientRect) {
      return getRect(scrollParent);
    }
    return {
      top: 0,
      left: 0,
    };
  };

  const getActiveAnchor = (scrollTop: number, rects) => {
    for (let i = rects.length - 1; i >= 0; i -= 1) {
      const prevHeight = i > 0 ? rects[i - 1].height : 0;
      const reachTop = props.sticky ? prevHeight + props.stickyOffsetTop : 0;

      if (scrollTop + reachTop >= rects[i].top) {
        return i;
      }
    }

    return -1;
  };

  const onScroll = () => {
    if (isHidden(root.current) || !scrollParent) {
      return;
    }
    const { indexList } = props;
    const scrollTop = getScrollTop(scrollParent);
    const scrollParentRect = getScrollerRect();

    const rects = Object.values(refs).map((anchor: { getRect: Function }) => {
      return anchor.getRect(scrollParent, scrollParentRect);
    });

    const active = getActiveAnchor(scrollTop, rects);

    setActiveAnchor(indexList[active]);

    if (sticky) {
      Object.values(refs).forEach((item: any, index) => {
        const { updateState } = item;
        if (index === active || index === active - 1) {
          const rect = item.root.current.getBoundingClientRect();
          updateState({ left: rect.left, width: rect.width });
        } else {
          updateState({ left: null, width: null });
        }
        if (index === active) {
          updateState({
            active: true,
            top:
              Math.max(props.stickyOffsetTop, rects[index].top - scrollTop) + scrollParentRect.top,
          });
        } else if (index === active - 1) {
          const activeItemTop = rects[active].top - scrollTop;
          updateState({
            active: activeItemTop > 0,
            top: activeItemTop + scrollParentRect.top - rects[index].height,
          });
        } else {
          updateState({ active: false });
        }
      });
    }
  };

  const init = () => setTimeout(onScroll, 0);

  const renderIndexes = () =>
    props.indexList.map((index) => {
      const active = index === activeAnchor;
      return (
        <span
          key={index}
          className={clsx(bem('index', { active }))}
          style={active ? highlightStyle : null}
          data-index={index}
        >
          {index}
        </span>
      );
    });

  const onTouchStart = (event: TouchEvent | React.TouchEvent) => {
    touch.start(event as TouchEvent);
  };

  const scrollTo = (index: number | string) => {
    if (!index) {
      return;
    }

    if (refs[index]) {
      refs[index].root.current.scrollIntoView();

      if (props.sticky && props.stickyOffsetTop) {
        if (popupContext.visible) {
          setScrollTop(scrollParent, getScrollTop(scrollParent) - props.stickyOffsetTop);
        } else {
          setRootScrollTop(getRootScrollTop() - props.stickyOffsetTop);
        }
      }

      if (props.onSelect && typeof props.onSelect === 'function') {
        props.onSelect(activeAnchor);
      }
    }
  };

  const scrollToElement = (element) => {
    const { index } = element.dataset;
    scrollTo(index);
  };

  const onClickSidebar = (event: MouseEvent) => {
    scrollToElement(event.target);
  };

  const onTouchMove = (event) => {
    touch.move(event);

    preventDefault(event);

    if (touch.isVertical()) {
      const { clientX, clientY } = event.touches[0];
      const target: any = document.elementFromPoint(clientX, clientY);

      if (target) {
        const { index } = target.dataset;

        /* istanbul ignore else */
        if (touchActiveIndex.current !== index) {
          touchActiveIndex.current = index;
          scrollToElement(target);
        }
      }
    }
  };

  useEventListener('scroll', onScroll as EventListener, {
    target: scrollParent,
    depends: [scrollParent],
  });
  useEventListener('touchmove', onTouchMove as EventListener, {
    target: sidebar.current,
    depends: [touch.deltaY],
  });

  useEffect(() => {
    if (props.onChange && typeof props.onChange === 'function') {
      props.onChange(activeAnchor);
    }
  }, [activeAnchor]);

  useMount(init);

  const handleMapChildren = ($children: ReactNode) => {
    return React.Children.toArray($children)
      .filter(Boolean)
      .map((child: ReactElement) => {
        if (child.type?.[COMPONENT_TYPE_KEY] === INDEX_ANCHORE_KEY) {
          return React.cloneElement(child, {
            ref: setRefs(child.props.index),
          });
        }
        if (child.props?.children) {
          const deepMap = handleMapChildren(child.props.children);
          return deepMap.length ? deepMap : child;
        }
        return child;
      });
  };

  useImperativeHandle(ref, () => ({
    scrollTo,
  }));

  const memoChildren = useMemo(() => handleMapChildren(children), [children]);

  return (
    <IndexBarContext.Provider value={{ zIndex, highlightColor, sticky }}>
      <div ref={root} className={clsx(bem(), props.className)} style={props.style}>
        {ssrCompatRender(() =>
          renderToContainer(
            props.teleport,
            <div
              ref={sidebar}
              className={clsx(bem('sidebar'))}
              style={sidebarStyle}
              onClick={onClickSidebar}
              onTouchStart={onTouchStart}
            >
              {renderIndexes()}
            </div>,
          ),
        )}
        {memoChildren}
      </div>
    </IndexBarContext.Provider>
  );
});

function genAlphabet() {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i += 1) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
}

IndexBar.defaultProps = {
  sticky: true,
  stickyOffsetTop: 0,
  indexList: genAlphabet(),
};

export default IndexBar;

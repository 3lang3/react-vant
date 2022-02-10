import React, {
  useMemo,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
  useContext,
} from 'react';
import clsx from 'clsx';

import useRefs from '../hooks/use-refs';
import useScrollParent from '../hooks/use-scroll-parent';
import useWindowSize from '../hooks/use-window-size';

import Sticky from '../sticky';
import TabsTitle from './TabsTitle';
import TabsContent from './TabsContent';
import TabsContext from './TabsContext';

import { TabPaneProps, TabsInstance, TabsProps } from './PropsType';
import {
  addUnit,
  parseChildList,
  isHidden,
  isDef,
  unitToPx,
  scrollLeftTo,
  getElementTop,
  getVisibleHeight,
  scrollTopTo,
  getVisibleTop,
  setRootScrollTop,
} from '../utils';
import { callInterceptor } from '../utils/interceptor';
import { BORDER_TOP_BOTTOM } from '../utils/constant';
import { useSetState, useUpdateEffect } from '../hooks';
import useEventListener from '../hooks/use-event-listener';
import { isReachBottom } from './utils';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import PopupContext from '../popup/PopupContext';

const Tabs = forwardRef<TabsInstance, TabsProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const popupContext = useContext(PopupContext);
  const [bem] = createNamespace('tabs', prefixCls);

  const { children, color, align, background } = props;

  const root = useRef<HTMLDivElement>(null);
  const [wrapRef, setWrapRef] = useState<HTMLDivElement>(null);
  const initChange = useRef<boolean>(false);
  const lockScroll = useRef<boolean>(false);
  const stickyFixed = useRef<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const scroller = useScrollParent(root) as HTMLElement;
  const windowSize = useWindowSize();

  const [titleRefs, setTitleRefs] = useRefs();
  const [contentRefs, setContentRefs] = useRefs();

  const tabHeight = useMemo(() => {
    if (!wrapRef) return 0;
    return getVisibleHeight(wrapRef);
  }, [wrapRef]);

  const tabHeightRef = useRef(tabHeight);

  tabHeightRef.current = tabHeight;

  const [state, setState] = useSetState({
    inited: false,
    position: '',
    currentIndex: -1,
    lineStyle: {
      backgroundColor: props.color,
    } as React.CSSProperties,
  });

  const childrenList = useMemo(
    () => parseChildList<TabPaneProps>(props.children),
    [props.children],
  );

  // whether the nav is scrollable
  const scrollable = useMemo(
    () => childrenList.length > props.swipeThreshold || !props.ellipsis,
    [childrenList.length, props.swipeThreshold, props.ellipsis],
  );

  const navStyle = useMemo(
    () => ({
      borderColor: color,
      background,
    }),
    [color, background],
  );

  const getTabName = (tab: TabPaneProps, index: number): string | number => tab?.name ?? index;

  const currentName = useMemo(() => {
    const activeTab = childrenList[state.currentIndex];
    return activeTab && getTabName(activeTab, state.currentIndex);
  }, [state.currentIndex]);

  const offsetTopPx = useMemo(() => unitToPx(props.offsetTop), [props.offsetTop]);

  // scroll active tab into view
  const scrollIntoView = (immediate?: boolean) => {
    const nav = navRef.current;
    if (!scrollable || !nav || !titleRefs || !titleRefs[state.currentIndex]) {
      return;
    }

    const title = titleRefs[state.currentIndex];

    const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
    scrollLeftTo(nav, to, immediate ? 0 : +props.duration);
  };

  const setLine = (immediate?: boolean) => {
    let shouldAnimate = state.inited;
    if (immediate) shouldAnimate = false;
    const titles = titleRefs;
    const hidden = isHidden(root.current);
    if (!titles || !titles[state.currentIndex] || props.type !== 'line' || hidden) {
      return;
    }

    const title = titles[state.currentIndex];
    const { lineWidth, lineHeight } = props;
    const left = title.offsetLeft + title.offsetWidth / 2;

    const lineStyle = {
      width: addUnit(lineWidth),
      backgroundColor: props.color,
      transform: `translateX(${left}px) translateX(-50%)`,
    } as React.CSSProperties;

    if (shouldAnimate) {
      lineStyle.transitionDuration = `${props.duration}ms`;
    }

    if (isDef(lineHeight)) {
      const height = addUnit(lineHeight);
      lineStyle.height = height;
      lineStyle.borderRadius = height;
    }

    setState({ lineStyle });
  };

  const findAvailableTab = (index: number) => {
    const diff = index < state.currentIndex ? -1 : 1;
    while (index >= 0 && index < childrenList.length) {
      if (!childrenList[index].disabled) {
        return index;
      }
      index += diff;
    }
    return null;
  };

  const setCurrentIndex = (currentIndex: number) => {
    const newIndex = findAvailableTab(currentIndex);

    if (!isDef(newIndex)) {
      return;
    }
    const newTab = childrenList[newIndex];
    const newName = getTabName(newTab, newIndex);
    const shouldEmitChange = state.currentIndex !== null;

    setState({ currentIndex: newIndex });

    if (!initChange.current) {
      initChange.current = true;
      return;
    }

    if (initChange.current) {
      if (shouldEmitChange) {
        props.onChange?.(newName, newTab.title);
      }
    }
  };

  // correct the index of active tab
  const setCurrentIndexByName = (name: string | number) => {
    const currentIndex = childrenList.findIndex(
      (tab: TabPaneProps, index) => getTabName(tab, index) === name,
    );
    setCurrentIndex(currentIndex < 0 ? 0 : currentIndex);
  };

  const scrollToCurrentContent = (immediate?, current?) => {
    if (props.scrollspy) {
      const target = contentRefs[current ?? state.currentIndex];
      if (target && scroller) {
        const to = getElementTop(target, scroller) - (offsetTopPx + tabHeightRef.current);
        lockScroll.current = true;
        scrollTopTo(scroller, to, immediate ? 0 : +props.duration, () => {
          lockScroll.current = false;
        });
      }
    }
  };

  const onClickTab = (item, index: number, event: React.MouseEvent) => {
    const { title, disabled = false } = item;
    const name = getTabName(item, index);
    props.onClickTab?.({
      name,
      title,
      event,
      disabled,
    });
    if (disabled) return;

    callInterceptor({
      interceptor: props.beforeChange,
      args: [name],
      done: () => {
        if (index !== state.currentIndex) {
          setCurrentIndex(index);
          scrollToCurrentContent(false, index);
        }
      },
    });
  };

  const scrollTo = (name: number | string) => {
    setCurrentIndexByName(name);
    scrollToCurrentContent(true);
  };

  const getCurrentIndexOnScroll = () => {
    const scrollOffset = offsetTopPx + tabHeightRef.current;
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < contentRefs.length; index++) {
      const $el = contentRefs[index];
      const top = getVisibleTop($el);
      if (top > scrollOffset) {
        return index === 0 ? 0 : index - 1;
      }
    }

    return titleRefs.length - 1;
  };

  const onScroll = () => {
    if (props.scrollspy && !lockScroll.current) {
      let index = getCurrentIndexOnScroll();
      if (typeof props.scrollspy === 'object') {
        if (props.scrollspy.autoFocusLast && isReachBottom(props.scrollspy.reachBottomThreshold)) {
          index = titleRefs.length - 1;
        }
      }
      if (index !== state.currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  const onStickyScroll = (params: { isFixed: boolean; scrollTop: number }) => {
    stickyFixed.current = params.isFixed;
    props.onScroll?.(params);
  };

  const renderNav = () => {
    return childrenList.map((item: TabPaneProps, index: number) => {
      return (
        <TabsTitle
          ref={setTitleRefs(index)}
          key={item.key}
          dot={item.dot}
          type={props.type}
          badge={item.badge}
          title={item.title}
          color={props.color}
          style={item.titleStyle}
          className={item.titleClass}
          isActive={index === state.currentIndex}
          disabled={item.disabled}
          scrollable={scrollable}
          renderTitle={item.renderTitle}
          activeColor={props.titleActiveColor}
          inactiveColor={props.titleInactiveColor}
          showZeroBadge={item.showZeroBadge}
          onClick={(event) => {
            onClickTab(item, index, event);
          }}
        />
      );
    });
  };

  const renderHeader = () => {
    const { type, border } = props;
    return (
      <div
        ref={setWrapRef}
        className={clsx([
          bem('wrap', { scrollable }),
          { [BORDER_TOP_BOTTOM]: type === 'line' && border },
        ])}
      >
        <div
          ref={navRef}
          role="tablist"
          className={clsx(bem('nav', [type, { complete: scrollable, start: align === 'start' }]))}
          style={navStyle}
        >
          {props.navRight}
          {renderNav()}
          {type === 'line' && <div className={clsx(bem('line'))} style={state.lineStyle} />}
          {props.navRight}
        </div>
      </div>
    );
  };

  useUpdateEffect(() => {
    setLine();
  }, [props.color, windowSize.width]);

  useUpdateEffect(() => {
    if (props.active !== currentName) {
      setCurrentIndexByName(props.active);
    }
  }, [props.active]);

  useUpdateEffect(() => {
    if (state.inited) {
      setCurrentIndexByName(props.active || currentName);
      setLine();
      scrollIntoView(true);
    }
  }, [React.Children.count(children)]);

  useUpdateEffect(() => {
    scrollIntoView();
    setLine();
    // scroll to correct position
    if (stickyFixed.current && !props.scrollspy) {
      setRootScrollTop(Math.ceil(getElementTop(root.current!) - offsetTopPx));
    }
  }, [state.currentIndex]);

  const init = () => {
    setCurrentIndexByName(props.active);
    scrollIntoView(true);
    setState({ inited: true });
  };

  useEffect(() => {
    init();
  }, []);

  useUpdateEffect(() => {
    if (popupContext.visible) {
      setLine();
    }
  }, [popupContext.visible]);

  useEventListener('scroll', onScroll, { target: scroller, depends: [state.currentIndex] });

  useImperativeHandle(ref, () => ({
    resize: setLine,
    scrollTo,
  }));

  const onStickyChange = () => {
    setLine(true);
  };

  return (
    <TabsContext.Provider value={{ props, currentName, scrollIntoView, setLine }}>
      <div ref={root} className={clsx(props.className, bem([props.type]))}>
        {props.sticky ? (
          <Sticky
            container={root}
            offsetTop={offsetTopPx}
            onChange={onStickyChange}
            onScroll={onStickyScroll}
          >
            {renderHeader()}
            {props.navBottom}
          </Sticky>
        ) : (
          <>
            {renderHeader()}
            {props.navBottom}
          </>
        )}
        <TabsContent
          count={childrenList.length}
          inited={state.inited}
          animated={props.animated}
          duration={props.duration}
          swipeable={props.swipeable}
          lazyRender={props.lazyRender}
          currentIndex={state.currentIndex}
          onChange={setCurrentIndex}
        >
          {React.Children.toArray(children)
            .filter(Boolean)
            .map((node: React.ReactElement, index: number) =>
              React.cloneElement(node, {
                index,
                ref: setContentRefs(index),
              }),
            )}
        </TabsContent>
      </div>
    </TabsContext.Provider>
  );
});

Tabs.defaultProps = {
  type: 'line',
  duration: 300,
  swipeThreshold: 5,
  offsetTop: 0,
  ellipsis: true,
  lazyRender: true,
  active: 0,
  align: 'center',
};

export default Tabs;

import React, { CSSProperties, useRef, useMemo, useContext } from 'react';
import clsx from 'clsx';

import useScrollParent from '../hooks/use-scroll-parent';
import useEventListener from '../hooks/use-event-listener';

import { getScrollTop, unitToPx, isHidden, getZIndexStyle, extend } from '../utils';
import { StickyProps } from './PropsType';
import { useSetState, useUpdateEffect, useVisibilityChange } from '../hooks';
import { getRect } from '../hooks/use-rect';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const Sticky: React.FC<StickyProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('sticky', prefixCls);

  const [state, updateState] = useSetState({
    fixed: false,
    width: 0, // root width
    height: 0, // root height
    transform: 0,
  });

  const root = useRef<HTMLDivElement>(null);
  const scrollParent = useScrollParent(root);

  const offset = useMemo<number>(
    () => unitToPx(props.position === 'top' ? props.offsetTop : props.offsetBottom),
    [props.position, props.offsetTop, props.offsetBottom],
  );

  const rootStyle = useMemo<CSSProperties | undefined>(() => {
    const { fixed, height, width } = state;
    if (fixed) {
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    }
    return null;
  }, [state.fixed, state.height, state.width]);

  const stickyStyle = useMemo<CSSProperties | undefined>(() => {
    if (!state.fixed) {
      return null;
    }

    const style: CSSProperties = extend(getZIndexStyle(props.zIndex), {
      width: `${state.width}px`,
      height: `${state.height}px`,
      [props.position]: `${offset}px`,
    });

    if (state.transform) {
      style.transform = `translate3d(0, ${state.transform}px, 0)`;
    }

    return style;
  }, [props.position, state.fixed, offset, state.width, state.height, state.transform]);

  const emitScroll = (scrollTop: number, isFixed: boolean) => {
    if (props.onScroll) {
      props.onScroll({
        scrollTop,
        isFixed,
      });
    }
  };

  const onScroll = () => {
    if (!root.current || isHidden(root.current)) {
      return;
    }

    const { container, position } = props;
    const rootRect = getRect(root.current);
    const scrollTop = getScrollTop(window);

    const newState = {} as typeof state;
    newState.width = rootRect.width;
    newState.height = rootRect.height;

    if (position === 'top') {
      // The sticky component should be kept inside the container element
      if (container) {
        const containerRect = getRect(container.current);
        const difference = containerRect.bottom - offset - newState.height;
        newState.fixed = offset > rootRect.top && containerRect.bottom > 0;
        newState.transform = difference < 0 ? difference : 0;
      } else {
        newState.fixed = offset > rootRect.top;
      }
    } else {
      const { clientHeight } = document.documentElement;
      if (container) {
        const containerRect = getRect(container.current);
        const difference = clientHeight - containerRect.top - offset - newState.height;
        newState.fixed =
          clientHeight - offset < rootRect.bottom && clientHeight > containerRect.top;
        newState.transform = difference < 0 ? -difference : 0;
      } else {
        newState.fixed = clientHeight - offset < rootRect.bottom;
      }
    }
    updateState(newState);
    emitScroll(scrollTop, newState.fixed);
  };

  useEventListener('scroll', onScroll, { target: scrollParent });
  useVisibilityChange(root, onScroll);
  useUpdateEffect(() => {
    props.onChange?.(state.fixed);
  }, [state.fixed]);

  return (
    <div ref={root} style={rootStyle}>
      <div className={clsx(bem({ fixed: state.fixed }))} style={stickyStyle}>
        {props.children}
      </div>
    </div>
  );
};

Sticky.defaultProps = {
  offsetTop: 0,
  offsetBottom: 0,
  position: 'top',
};

export default Sticky;

import React, { useCallback, useContext, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { PullRefreshProps, PullRefreshStatus } from './PropsType';
import { getScrollTop, preventDefault } from '../utils';

import useTouch from '../hooks/use-touch';
import { getScrollParent } from '../hooks/use-scroll-parent';
import useEventListener from '../hooks/use-event-listener';

import Loading from '../loading';
import { useSetState, useUpdateEffect } from '../hooks';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const DEFAULT_HEAD_HEIGHT = 50;
const TEXT_STATUS = ['pulling', 'loosing', 'success'];

const PullRefresh: React.FC<PullRefreshProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('pull-refresh', prefixCls);

  const { disabled, animationDuration } = props;

  const root = useRef<HTMLDivElement>();
  const [state, updateState] = useSetState({
    refreshing: false,
    status: 'normal' as PullRefreshStatus,
    distance: 0,
    duration: 0,
  });

  const track = useRef<HTMLDivElement>();
  const reachTop = useRef(null);

  const touch = useTouch();

  const getHeadStyle = () => {
    if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
      return {
        height: `${props.headHeight}px`,
      };
    }
    return null;
  };

  const isTouchable = useCallback(() => {
    return state.status !== 'loading' && state.status !== 'success' && !disabled;
  }, [state.status, disabled]);

  const ease = (distance: number) => {
    const pullDistance = +(props.pullDistance || props.headHeight);

    if (distance > pullDistance) {
      if (distance < pullDistance * 2) {
        distance = pullDistance + (distance - pullDistance) / 2;
      } else {
        distance = pullDistance * 1.5 + (distance - pullDistance * 2) / 4;
      }
    }

    return Math.round(distance);
  };

  const setStatus = (distance: number, isLoading?: boolean) => {
    const pullDistance = +(props.pullDistance || props.headHeight);
    const newState = { distance } as typeof state;

    if (isLoading) {
      newState.status = 'loading';
    } else if (distance === 0) {
      newState.status = 'normal';
    } else if (distance < pullDistance) {
      newState.status = 'pulling';
    } else {
      newState.status = 'loosing';
    }
    updateState(newState);
  };

  const getStatusText = () => {
    if (state.status === 'normal') {
      return '';
    }
    return props[`${state.status}Text`];
  };

  const renderStatus = () => {
    const { status, distance } = state;

    if (typeof props[`${state.status}Text`] === 'function') {
      return props[`${state.status}Text`]!({ distance });
    }

    const nodes: JSX.Element[] = [];

    if (TEXT_STATUS.includes(status)) {
      nodes.push(
        <div key="text" className={clsx(bem('text'))}>
          {getStatusText()}
        </div>,
      );
    }
    if (status === 'loading') {
      nodes.push(
        <Loading key="loading" className={clsx(bem('loading'))}>
          {getStatusText()}
        </Loading>,
      );
    }

    return nodes;
  };

  const showSuccessTip = () => {
    updateState({ status: 'success' });
    setTimeout(() => {
      setStatus(0);
    }, +props.successDuration);
  };

  const onRefresh = async () => {
    try {
      updateState({ refreshing: true });
      await props.onRefresh();
      updateState({ refreshing: false });
    } catch (error) {
      updateState({ refreshing: false });
    }
  };

  const checkPosition = (event: TouchEvent) => {
    const scrollTarget = getScrollParent(event.target as HTMLElement);
    reachTop.current = getScrollTop(scrollTarget) === 0;
    if (reachTop.current) {
      updateState({ duration: 0 });
      touch.start(event);
    }
  };

  const onTouchStart = (event) => {
    if (isTouchable()) {
      checkPosition(event.nativeEvent);
    }
  };

  const onTouchMove = useCallback(
    (event: TouchEvent) => {
      if (isTouchable()) {
        if (!reachTop.current) {
          checkPosition(event);
        }

        touch.move(event);
        if (reachTop.current && touch.deltaY >= 0 && touch.isVertical()) {
          setStatus(ease(touch.deltaY));
          preventDefault(event);
        } else {
          /**
           * IN THIS CASE:
           * if component don't rerender after event.preventDefault
           * ios will hold `preventDefault` behavior when touchmoving
           * it will cause window unscrollable
           */
          setStatus(0);
        }
      }
    },
    [reachTop.current, touch.deltaY, isTouchable],
  );

  const onTouchEnd = async () => {
    if (reachTop.current && touch.deltaY && isTouchable()) {
      updateState({ duration: +animationDuration });
      if (state.status === 'loosing') {
        setStatus(+props.headHeight, true);
        onRefresh();
      } else {
        setStatus(0);
      }
    }
  };

  useEventListener('touchmove', onTouchMove as EventListener, {
    target: track.current,
    depends: [reachTop.current, isTouchable(), touch.deltaY],
  });

  useUpdateEffect(() => {
    updateState({ duration: +animationDuration });
    if (state.refreshing) {
      setStatus(+props.headHeight, true);
    } else if (props.successText) {
      showSuccessTip();
    } else {
      setStatus(0, false);
    }
  }, [state.refreshing]);

  const trackStyle = useMemo(
    () => ({
      transitionDuration: `${state.duration}ms`,
      transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : '',
    }),
    [state.duration, state.distance],
  );

  return (
    <div ref={root} className={clsx(props.className, bem())} style={props.style}>
      <div
        ref={track}
        className={clsx(bem('track'))}
        style={trackStyle}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div className={clsx(bem('head'))} style={getHeadStyle()}>
          {renderStatus()}
        </div>
        {props.children}
      </div>
    </div>
  );
};

PullRefresh.defaultProps = {
  headHeight: 50,
  animationDuration: 300,
  successDuration: 500,
  pullingText: '下拉即可刷新...',
  loosingText: '释放即可刷新...',
  loadingText: '加载中...',
};

export default PullRefresh;

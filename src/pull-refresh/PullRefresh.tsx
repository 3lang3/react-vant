import React, { useMemo, useRef } from 'react';
import classnames from 'classnames';
import { PullRefreshProps, PullRefreshStatus } from './PropsType';
import { createNamespace, getScrollTop, preventDefault } from '../utils';

import useTouch from '../hooks/use-touch';
import useScrollParent from '../hooks/use-scroll-parent';
import useEventListener from '../hooks/use-event-listener';

import Loading from '../loading';
import { useSetState, useUpdateEffect } from '../hooks';

const [bem] = createNamespace('pull-refresh');

const DEFAULT_HEAD_HEIGHT = 50;
const TEXT_STATUS = ['pulling', 'loosing', 'success'];

const PullRefresh: React.FC<PullRefreshProps> = (props) => {
  const { disabled, animationDuration } = props;

  const root = useRef<HTMLDivElement>();
  const scrollParent = useScrollParent(root);

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

  const isTouchable = useMemo(() => {
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
        <div key="text" className={classnames(bem('text'))}>
          {getStatusText()}
        </div>,
      );
    }
    if (status === 'loading') {
      nodes.push(
        <Loading key="loading" className={classnames(bem('loading'))}>
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
    reachTop.current = getScrollTop(scrollParent) === 0;
    if (reachTop.current) {
      updateState({ duration: 0 });
      touch.start(event);
    }
  };

  const onTouchStart = (event) => {
    if (isTouchable) {
      checkPosition(event.nativeEvent);
    }
  };

  const onTouchMove = (event: TouchEvent) => {
    if (isTouchable) {
      if (!reachTop.current) {
        checkPosition(event);
      }

      touch.move(event);
      const { deltaY } = touch;

      if (reachTop.current && deltaY >= 0) {
        preventDefault(event);
        if (touch.isVertical()) {
          setStatus(ease(deltaY));
        }
      }
    }
  };

  const onTouchEnd = async () => {
    if (reachTop.current && touch.deltaY && isTouchable) {
      updateState({ duration: +animationDuration });
      if (state.status === 'loosing') {
        setStatus(+props.headHeight, true);
        onRefresh();
        touch.reset();
      } else {
        setStatus(0);
      }
    }
  };

  useEventListener('touchmove', onTouchMove as EventListener, {
    target: track.current,
    depends: [track.current, reachTop.current, isTouchable, touch.deltaY],
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

  const trackStyle = {
    transitionDuration: `${state.duration}ms`,
    transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : '',
  };

  // console.log(state.distance)

  return (
    <div ref={root} className={classnames(props.className, bem())} style={props.style}>
      <div
        ref={track}
        className={classnames(bem('track'))}
        style={trackStyle}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <div className={classnames(bem('head'))} style={getHeadStyle()}>
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

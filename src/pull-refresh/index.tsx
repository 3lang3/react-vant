/* eslint-disable no-param-reassign */
import React, { useState, useMemo, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { PullRefreshProps, PullRefreshStatus } from './PropsType';
import { createNamespace, getScrollTop, preventDefault } from '../utils';

import useTouch from '../hooks/use-touch';
import useScrollParent from '../hooks/use-scroll-parent';
import useEventListener from '../hooks/use-event-listener';

import Loading from '../loading';

const [bem] = createNamespace('pull-refresh');

const DEFAULT_HEAD_HEIGHT = 50;
const TEXT_STATUS = ['pulling', 'loosing', 'success'];

const PullRefresh: React.FC<PullRefreshProps> = (props) => {
  const { disabled, refreshing, animationDuration, successDuration } = props;

  // 操作状态
  const [status, setStatus] = useState<PullRefreshStatus>('normal');
  const [distance, setDistance] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const root = useRef<HTMLDivElement>();
  const track = useRef<HTMLDivElement>();
  const reachTop = useRef(null);

  const touch = useTouch();
  const scrollParent = useScrollParent(root);

  const isTouchable = useMemo(() => {
    return status !== 'loading' && status !== 'success' && !disabled;
  }, [status, disabled]);

  const ease = (_distance: number) => {
    const headHeight = +props.headHeight;
    if (_distance > headHeight) {
      if (_distance < headHeight * 2) {
        _distance = headHeight + (_distance - headHeight) / 2;
      } else {
        _distance = headHeight * 1.5 + (_distance - headHeight * 2) / 4;
      }
    }
    setDuration(_distance);
    return Math.round(_distance);
  };

  const updateStatus = (_distance: number, isLoading?: boolean) => {
    setDistance(_distance);
    if (isLoading) {
      setStatus('loading');
    } else if (_distance === 0) {
      setStatus('normal');
    } else if (_distance < props.headHeight) {
      setStatus('pulling');
    } else {
      setStatus('loosing');
    }
  };

  const getHeadStyle = () => {
    if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
      return {
        height: `${props.headHeight}px`,
      };
    }
    return null;
  };

  const getStatusText = () => {
    if (status === 'normal') {
      return '';
    }
    if (props[`${status}Slot`]) {
      return props[`${status}Slot`]();
    }

    return props[`${status}Text`];
  };

  const renderStatus = () => {
    let node = null;

    if (status === 'loading') {
      if (props.loadingSlot) {
        node = getStatusText();
      } else {
        node = <Loading size="16">{getStatusText()}</Loading>;
      }
    }

    if (TEXT_STATUS.indexOf(status) !== -1) {
      node = <div className={classnames(bem('text'))}>{getStatusText()}</div>;
    }

    return node;
  };

  const checkPosition = (event: TouchEvent) => {
    reachTop.current = getScrollTop(scrollParent) === 0;
    if (reachTop.current) {
      setDuration(0);
      touch.start(event);
    }
  };

  const onTouchStart = (event: TouchEvent | React.TouchEvent) => {
    if (isTouchable) {
      checkPosition(event as TouchEvent);
    }
  };

  const onTouchMove = (event: TouchEvent | React.TouchEvent) => {
    if (isTouchable) {
      if (!reachTop.current) {
        checkPosition(event as TouchEvent);
      }

      const { deltaYRef, deltaY } = touch;
      touch.move(event as TouchEvent);

      if (reachTop.current && deltaYRef.current >= 0) {
        preventDefault(event);

        if (touch.isVertical()) {
          updateStatus(ease(deltaY));
        }
      }
    } else {
      preventDefault(event);
    }
  };

  const onTouchEnd = () => {
    if (reachTop.current && touch.deltaY && isTouchable) {
      setDuration(+animationDuration);
      if (status === 'loosing') {
        updateStatus(+props.headHeight, true);

        props.onRefresh();
      } else {
        updateStatus(0);
      }
    }
  };

  const debounce = (start: Function, end: Function, ms = 0) => {
    let timeoutId = null;
    return (...args) => {
      start.apply(this, args);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => end.apply(this, args), ms);
    };
  };

  const onScrollStart = () => {
    if (props.onScrollStart) {
      props.onScrollStart();
    }
  };

  const onScrollEnd = () => {
    if (props.onScrollEnd) {
      props.onScrollEnd();
    }
  };

  useEventListener('touchmove', onTouchMove as EventListener, {
    target: track.current,
    depends: [track.current, reachTop.current, isTouchable, touch.deltaY],
  });

  useEventListener('scroll', debounce(onScrollStart, onScrollEnd, 300), {
    target: scrollParent,
    depends: [scrollParent],
  });

  const showSuccessTip = () => {
    setStatus('success');

    setTimeout(() => {
      updateStatus(0);
    }, +successDuration);
  };

  useEffect(() => {
    setDuration(+animationDuration);
    if (refreshing) {
      updateStatus(+props.headHeight, true);
    } else if (props.successText || props.successSlot) {
      showSuccessTip();
    } else {
      updateStatus(0, false);
    }
  }, [refreshing]);

  const trackStyle = {
    transitionDuration: `${duration}ms`,
    transform: distance ? `translate3d(0,${distance}px, 0)` : '',
  };

  return (
    <div ref={root} className={classnames(bem())} style={props.style}>
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

/* eslint-disable no-nested-ternary */
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  Children,
  cloneElement,
  ReactElement,
  forwardRef,
  useImperativeHandle,
} from 'react';
import classnames from 'classnames';

import useRefs from '../hooks/use-refs';
import useTouch from '../hooks/use-touch';
import useWindowSize from '../hooks/use-window-size';
import usePageVisibility from '../hooks/use-page-visibility';
import useEventListener from '../hooks/use-event-listener';

import SwipeContext from './SwipeContext';
import { SwipeActionType, SwipeProps, SwipeStatic } from './PropsType';
import { doubleRaf } from '../utils/raf';
import { createNamespace, preventDefault, isHidden, range } from '../utils';

const [bem] = createNamespace('swipe');

const Swipe = forwardRef<SwipeActionType, SwipeProps>((props, compRef) => {
  const { loop, lazyRender, children, vertical, duration, showIndicators, initialSwipe, onChange } =
    props;

  const [refs, setRefs] = useRefs();
  const autoplayTimer = useRef<NodeJS.Timeout>(null);
  // const [autoplayTimer, setAutoplayTimer] = useState<NodeJS.Timeout>(null);
  const [swiping, setSwiping] = useState<boolean>(false);
  const [state, setState] = useState({
    rect: { width: 0, height: 0 },
    width: 0,
    height: 0,
    offset: 0,
    active: 0,
  });

  const touch = useTouch();
  const visibility = usePageVisibility();
  const windowSize = useWindowSize();

  const root = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const count = useMemo(() => React.Children.count(children), [children]);
  const size = useMemo(() => state[vertical ? 'height' : 'width'], [state]);
  const trackSize = useMemo(() => count * size, [count, size]);
  const delta = useMemo(
    () => (props.vertical ? touch.deltaY : touch.deltaX),
    [touch.deltaX, touch.deltaY],
  );

  const activeIndicator = useMemo(() => (state.active + count) % count, [count, state.active]);
  const isCorrectDirection = useMemo(() => {
    const expect = props.vertical ? 'vertical' : 'horizontal';
    return touch.direction === expect;
  }, [touch.direction]);

  // 区块移动的最大距离（因为是负数，则命名最小）
  const minOffset = useMemo(
    () => (props.vertical ? state.rect.height : state.rect.width) - size * count,
    [state.rect],
  );

  const maxCount = useMemo(() => Math.ceil(Math.abs(minOffset / size)), [minOffset]);

  const getTargetActive = (pace) => {
    const { active } = state;

    if (pace) {
      if (props.loop) {
        return range(active + pace, -1, count);
      }
      return range(active + pace, 0, maxCount);
    }
    return active;
  };

  const getTargetOffset = (targetActive: number, offset = 0) => {
    let currentPosition = targetActive * size;
    if (!props.loop) {
      currentPosition = Math.min(currentPosition, -minOffset);
    }

    let targetOffset = offset - currentPosition;
    if (!props.loop) {
      targetOffset = range(targetOffset, minOffset, 0);
    }
    return targetOffset;
  };

  const move = ({ pace = 0, offset = 0, emitChange = false }) => {
    if (count <= 1) {
      return;
    }

    const { active } = state;
    const targetActive = getTargetActive(pace);
    const targetOffset = getTargetOffset(targetActive, offset);

    // auto move first and last swipe in loop mode
    if (props.loop) {
      if (refs[0] && targetOffset !== minOffset) {
        const outRightBound = targetOffset < minOffset;
        refs[0].setOffset(outRightBound ? trackSize : 0);
      }

      if (refs[count - 1] && targetOffset !== 0) {
        const outLeftBound = targetOffset > 0;
        refs[count - 1].setOffset(outLeftBound ? -trackSize : 0);
      }
    }

    Object.assign(state, {
      active: targetActive,
      offset: targetOffset,
    });
    setState({ ...state });

    if (emitChange && targetActive !== active) {
      if (onChange && typeof onChange === 'function') {
        onChange(targetActive);
      }
    }
  };

  const correctPosition = () => {
    setSwiping(true);

    if (state.active <= -1) {
      move({ pace: count });
    } else if (state.active >= count) {
      move({ pace: -count });
    }
  };

  const next = () => {
    correctPosition();
    touch.reset();

    doubleRaf(() => {
      setSwiping(false);
      move({
        pace: 1,
        emitChange: true,
      });
    });
  };

  const stopAutoplay = () => {
    clearTimeout(autoplayTimer.current);
    autoplayTimer.current = null;
  };

  const autoplay = () => {
    if (props.autoplay > 0 && count > 1) {
      stopAutoplay();
      autoplayTimer.current = setTimeout(() => {
        next();
        autoplay();
      }, +props.autoplay);
    }
  };

  // initialize swipe position
  const initialize = (active = +props.initialSwipe) => {
    if (!root.current) {
      return;
    }

    stopAutoplay();
    const newState = { ...state };
    if (!isHidden(root.current)) {
      const rect = {
        width: root.current.offsetWidth,
        height: root.current.offsetHeight,
      };
      newState.rect = rect;
      newState.width = +(props.width ?? rect.width);
      newState.height = +(props.height ?? rect.height);
    }

    newState.active = active;
    newState.offset = getTargetOffset(active);

    setSwiping(true);
    setState(newState);
    refs.forEach((ref) => {
      ref.setOffset(0);
    });
  };

  useEffect(() => {
    initialize();
  }, [count, initialSwipe]);

  useEffect(() => {
    if (minOffset && props.autoplay > 0) {
      autoplay();
    } else {
      stopAutoplay();
    }
  }, [minOffset, props.autoplay]);

  useEffect(() => {
    if (visibility === 'visible') {
      autoplay();
    } else {
      stopAutoplay();
    }
  }, [visibility]);

  useEffect(() => {
    return stopAutoplay;
  }, []);

  let touchStartTime: number;

  const onTouchStart = (event: TouchEvent | React.TouchEvent) => {
    if (!props.touchable) return;
    touch.start(event as TouchEvent);
    touchStartTime = Date.now();

    stopAutoplay();
    correctPosition();
  };

  const onTouchMove = (event: TouchEvent | React.TouchEvent) => {
    if (props.touchable && swiping) {
      touch.move(event as TouchEvent);

      if (props.vertical) {
        preventDefault(event, props.stopPropagation);
      }

      if (isCorrectDirection) {
        preventDefault(event, props.stopPropagation);
        move({ offset: delta });
      }
    }
  };

  const onTouchEnd = () => {
    if (!props.touchable || !swiping) {
      return;
    }

    const moveDurations = Date.now() - touchStartTime;
    const speed = delta / moveDurations;
    const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta) > size / 3;

    if (shouldSwipe && isCorrectDirection) {
      const offset = props.vertical ? touch.offsetY : touch.offsetX;

      let pace = 0;

      if (props.loop) {
        pace = offset > 0 ? (delta > 0 ? -1 : 1) : 0;
      } else {
        pace = -Math[delta > 0 ? 'ceil' : 'floor'](delta / size);
      }

      move({
        pace,
        emitChange: true,
      });
    } else if (delta) {
      move({ pace: 0 });
    }

    setSwiping(false);
    autoplay();
  };

  useEventListener('touchmove', onTouchMove as EventListener, {
    target: trackRef.current,
    depends: [trackRef.current, touch.deltaX, touch.deltaY],
  });

  const resize = () => {
    initialize(activeIndicator);
  };

  useImperativeHandle(compRef, () => ({
    resize,
    rect: () => root.current.getBoundingClientRect(),
  }));

  useEffect(() => {
    resize();
  }, [windowSize.width, windowSize.height]);

  const trackStyle = useMemo(() => {
    const mainAxis = vertical ? 'height' : 'width';
    const crossAxis = vertical ? 'width' : 'height';
    return {
      [mainAxis]: `${trackSize}px`,
      [crossAxis]: props[crossAxis] ? `${props[crossAxis]}px` : '',
      transitionDuration: `${swiping ? 0 : duration}ms`,
      transform: `translate${vertical ? 'Y' : 'X'}(${state.offset}px)`,
    };
  }, [state, vertical, duration, swiping]);

  const renderDot = (_, index: number) => {
    const active = index === activeIndicator;
    const style = active ? { backgroundColor: props.indicatorColor } : null;
    return <i style={style} key={index} className={classnames(bem('indicator', { active }))} />;
  };

  const renderIndicator = () => {
    if (showIndicators && count > 1) {
      if (props.indicatorRender) {
        return props.indicatorRender({ current: activeIndicator + 1, count });
      }
      return (
        <div className={classnames(bem('indicators', { vertical }), props.indicatorWrapperClass)}>
          {Array(...Array(count)).map(renderDot)}
        </div>
      );
    }
    return null;
  };

  return (
    <SwipeContext.Provider value={{ size, vertical, loop, lazyRender, activeIndicator, count }}>
      <div ref={root} className={classnames(bem(), props.className)} style={props.style}>
        <div
          ref={trackRef}
          style={trackStyle}
          className={classnames(bem('track', { vertical: props.vertical }))}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
        >
          {Children.map(children, (child: ReactElement, index: number) =>
            cloneElement(child, {
              ref: setRefs(index),
              index,
            }),
          )}
        </div>
        {renderIndicator()}
      </div>
    </SwipeContext.Provider>
  );
});

Swipe.defaultProps = {
  initialSwipe: 0,
  loop: true,
  duration: 500,
  touchable: true,
  showIndicators: true,
  stopPropagation: true,
};

export default Swipe as React.ForwardRefExoticComponent<SwipeProps> & SwipeStatic;

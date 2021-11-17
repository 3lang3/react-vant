/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
import React, {
  forwardRef,
  memo,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import cls from 'clsx';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import SwiperItem from './SwiperItem';
import { SwiperProps, SwiperInstance, PageIndicatorProps } from './PropsType';
import useRefState from '../hooks/use-ref-state';
import { bound } from '../utils/bound';
import { devWarning } from '../utils/dev-log';
import { noop } from '../utils';
import { getRect } from '../hooks/use-rect';

const PageIndicator = memo<PageIndicatorProps>(({ vertical, ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('indicator', prefixCls);

  const dots: React.ReactElement[] = [];
  for (let i = 0; i < props.total; i++) {
    dots.push(
      <div
        key={i}
        className={cls(
          bem('dot', {
            active: props.current === i,
          }),
        )}
      />,
    );
  }

  return (
    <div className={cls(props.className, bem({ vertical }))} style={props.style}>
      {dots}
    </div>
  );
});

const Swiper = forwardRef<SwiperInstance, SwiperProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('swiper', prefixCls);

  const { loop: outerLoop, autoplay, vertical, duration } = props;

  const lock = useRef<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<HTMLDivElement>(null);
  const [current, setCurrent] = useState(props.initialSwipe);
  const [dragging, setDragging, draggingRef] = useRefState(false);

  const axis = useMemo(() => (vertical ? 'y' : 'x'), [vertical]);

  const slideRatio = props.slideSize / 100;
  const offsetRatio = props.trackOffset / 100;

  const computedStyle = useMemo(() => {
    return {
      [`--${prefixCls}-swipe-slide-size`]: `${props.slideSize}%`,
      [`--${prefixCls}-swipe-track-offset`]: `${props.trackOffset}%`,
      ...props.style,
    };
  }, [props.style, props.slideSize, props.trackOffset]);

  const axisDistance = useMemo(() => {
    if (!vertical) return 100;
    const rect = getRect(root);
    return rect.height;
  }, [vertical, root]);

  const { validChildren, count } = useMemo(() => {
    let innerCount = 0;
    const innerValidChildren = React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return null;
      if (child.type !== SwiperItem) {
        devWarning('Swiper', 'The children of `Swiper` must be `Swiper.Item` components.');
        return null;
      }
      innerCount++;
      return child;
    });
    return {
      validChildren: innerValidChildren,
      count: innerCount,
    };
  }, [props.children]);

  const loop = useMemo(() => {
    if (count <= 1) return false;
    return outerLoop;
  }, [count, outerLoop]);

  const getSlidePixels = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const trackPixels = vertical ? track.offsetHeight : track.offsetWidth;
    return (trackPixels * props.slideSize) / 100;
  };

  const boundIndex = (cur: number) => {
    let min = 0;
    let max = count - 1;
    if (props.stuckAtBoundary) {
      min += (1 - slideRatio - offsetRatio) / slideRatio;
      max -= (1 - slideRatio - offsetRatio) / slideRatio;
    }
    return bound(cur, min, max);
  };

  const [{ position }, api] = useSpring(
    () => ({
      position: boundIndex(current) * 100,
      config: {
        tension: 200,
        friction: 30,
        duration,
        // eslint-disable-next-line no-cond-assign
        easing: (t) => ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2,
      },
      onRest: () => {
        if (draggingRef.current) return;
        const rawX = position.get();
        const totalWidth = 100 * count;
        const standardPosition = modulus(rawX, totalWidth);
        if (standardPosition === rawX) return;
        api.start({
          position: standardPosition,
          immediate: true,
        });
      },
    }),
    [count],
  );

  const bind = useDrag(
    (state) => {
      if (lock.current) return;
      const slidePixels = getSlidePixels();
      if (!slidePixels) return;
      const paramIndex = vertical ? 1 : 0;
      const offset = state.offset[paramIndex];
      const direction = state.direction[paramIndex];
      const velocity = state.velocity[paramIndex];
      setDragging(true);
      if (!state.last) {
        api.start({
          position: (offset * 100) / slidePixels,
          immediate: true,
        });
      } else {
        const index = Math.round(
          (offset + Math.min(velocity * 2000, slidePixels) * direction) / slidePixels,
        );
        swipeTo(index);
        window.setTimeout(() => {
          setDragging(false);
        });
      }
    },
    {
      transform: ([x, y]) => [-x, -y],
      from: () => {
        const slidePixels = getSlidePixels();
        return [(position.get() / 100) * slidePixels, (position.get() / 100) * slidePixels];
      },
      bounds: () => {
        if (loop) return {};
        const slidePixels = getSlidePixels();
        const lowerBound = boundIndex(0) * slidePixels;
        const upperBound = boundIndex(count - 1) * slidePixels;
        return vertical
          ? {
              top: lowerBound,
              bottom: upperBound,
            }
          : {
              left: lowerBound,
              right: upperBound,
            };
      },
      rubberband: true,
      axis,
      preventScroll: !vertical,
      pointer: {
        touch: true,
      },
    },
  );

  const renderIndicator = () => {
    if (props.indicator === undefined || props.indicator === true) {
      return (
        <div className={cls(bem('indicator', { vertical }))}>
          <PageIndicator
            {...props.indicatorProps}
            vertical={vertical}
            total={count}
            current={current}
          />
        </div>
      );
    }
    if (typeof props.indicator === 'function') {
      return props.indicator(count, current);
    }
    return null;
  };

  const onClickCapture = (e) => {
    if (draggingRef.current) {
      e.stopPropagation();
    }
  };

  function swipeTo(index: number, immediate = false) {
    if (loop) {
      const i = modulus(index, count);
      setCurrent(i);
      props.onChange?.(i);
      api.start({
        position: index * 100,
        immediate,
      });
    } else {
      const i = bound(index, 0, count - 1);
      setCurrent(i);
      props.onChange?.(i);
      api.start({
        position: boundIndex(i) * 100,
        immediate,
      });
    }
  }

  const swipeNext = () => {
    swipeTo(Math.round(position.get() / 100) + 1);
  };

  const swipePrev = () => {
    swipeTo(Math.round(position.get() / 100) - 1);
  };

  useImperativeHandle(ref, () => ({
    activeIndex: current,
    swipeTo,
    swipeNext,
    swipePrev,
    lock: () => {
      lock.current = true;
    },
    unlock: () => {
      lock.current = false;
    },
  }));

  useEffect(() => {
    if (!autoplay || dragging) return noop;
    const autoplayInterval = typeof autoplay === 'boolean' ? 5000 : autoplay;
    const interval = window.setInterval(() => {
      swipeNext();
    }, autoplayInterval);
    return () => {
      window.clearInterval(interval);
    };
  }, [autoplay, dragging, axisDistance]);

  if (count === 0) {
    devWarning('Swiper', '`Swiper` needs at least one child.');
  }

  return (
    <div ref={setRoot} className={cls(props.className, bem({ vertical }))} style={computedStyle}>
      <div
        ref={trackRef}
        className={cls(
          bem('track', {
            'allow-touch-move': props.touchable,
          }),
        )}
        onClickCapture={onClickCapture}
        {...(props.touchable ? bind() : {})}
      >
        <div
          className={cls(
            bem('track-inner', {
              vertical,
            }),
          )}
        >
          {React.Children.map(validChildren, (child, index) => {
            return (
              <animated.div
                className={cls(bem('slide'))}
                style={{
                  [axis]: position.to((pos) => {
                    let finalPosition = -pos + index * 100;
                    const totalWidth = count * 100;
                    const flagWidth = totalWidth / 2;
                    finalPosition = modulus(finalPosition + flagWidth, totalWidth) - flagWidth;
                    return `${finalPosition}%`;
                  }),
                  left: `-${index * 100}%`,
                }}
              >
                {child}
              </animated.div>
            );
          })}
        </div>
      </div>
      {renderIndicator()}
    </div>
  );
});

// defaultProps defined if need
Swiper.defaultProps = {
  initialSwipe: 0,
  touchable: true,
  loop: true,
  autoplay: false,
  slideSize: 100,
  trackOffset: 0,
  stuckAtBoundary: false,
};

export default Swiper;

function modulus(value: number, division: number) {
  const remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
}

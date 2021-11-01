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
import cls from 'classnames';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import SwiperItem from './SwiperItem';
import { SwiperProps, SwiperInstance, PageIndicatorProps } from './PropsType';
import useRefState from '../hooks/use-ref-state';
import { bound } from '../utils/bound';
import { devWarning } from '../utils/dev-log';
import { noop } from '../utils';

const PageIndicator = memo<PageIndicatorProps>(({ color = 'primary', ...props }) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('page-indicator', prefixCls);

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
    <div className={cls(props.className, bem({ color }))} style={props.style}>
      {dots}
    </div>
  );
});

const Swiper = forwardRef<SwiperInstance, SwiperProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('swiper', prefixCls);

  const { loop, autoplay } = props;

  const trackRef = useRef<HTMLDivElement>(null);

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

  const [current, setCurrent] = useState(props.initialSwipe);

  const [dragging, setDragging, draggingRef] = useRefState(false);

  const [{ x }, api] = useSpring(
    () => ({
      x: bound(current, 0, count - 1) * 100,
      config: { tension: 200, friction: 30 },
      onRest: () => {
        if (draggingRef.current) return;
        const rawX = x.get();
        const totalWidth = 100 * count;
        const standardX = modulus(rawX, totalWidth);
        if (standardX === rawX) return;
        api.start({
          x: standardX,
          immediate: true,
        });
      },
    }),
    [count],
  );

  const bind = useDrag(
    (state) => {
      const width = getWidth();
      if (!width) return;
      const [offsetX] = state.offset;
      setDragging(true);
      if (!state.last) {
        api.start({
          x: (offsetX * 100) / width,
          immediate: true,
        });
      } else {
        const index = Math.round(
          (offsetX + Math.min(state.velocity[0] * 2000, width) * state.direction[0]) / width,
        );
        swipeTo(index);
        window.setTimeout(() => {
          setDragging(false);
        });
      }
    },
    {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      transform: ([x, y]) => [-x, y],
      from: () => {
        const width = getWidth();
        return [(x.get() / 100) * width, 0];
      },
      bounds: () => {
        if (loop) return {};
        const width = getWidth();
        return {
          left: 0,
          right: (count - 1) * width,
        };
      },
      rubberband: true,
      axis: 'x',
      preventScroll: true,
      pointer: {
        touch: true,
      },
    },
  );

  function getWidth() {
    const track = trackRef.current;
    if (!track) return 0;
    return track.offsetWidth;
  }

  function swipeTo(index: number) {
    if (loop) {
      const i = modulus(index, count);
      setCurrent(i);
      props.onChange?.(i);
      api.start({
        x: index * 100,
      });
    } else {
      const i = bound(index, 0, count - 1);
      setCurrent(i);
      props.onChange?.(i);
      api.start({
        x: i * 100,
      });
    }
  }

  function swipeNext() {
    swipeTo(Math.round(x.get() / 100) + 1);
  }

  function swipePrev() {
    swipeTo(Math.round(x.get() / 100) - 1);
  }

  useImperativeHandle(ref, () => ({
    swipeTo,
    swipeNext,
    swipePrev,
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
  }, [autoplay, dragging]);

  if (count === 0) {
    devWarning('Swiper', '`Swiper` needs at least one child.');
  }

  return (
    <div className={cls(props.className, bem())} style={props.style}>
      <div
        className={cls(bem('track'), {
          'allow-touch-move': props.touchable,
        })}
        onClickCapture={(e) => {
          if (draggingRef.current) {
            e.stopPropagation();
          }
        }}
        {...(props.touchable ? bind() : {})}
      >
        <div className={cls(bem('track-inner'))} ref={trackRef}>
          {React.Children.map(validChildren, (child, index) => {
            return (
              <animated.div
                className={cls(bem('slide'))}
                style={{
                  // eslint-disable-next-line @typescript-eslint/no-shadow
                  x: x.to((x) => {
                    let position = -x + index * 100;
                    if (loop) {
                      const totalWidth = count * 100;
                      const flagWidth = totalWidth / 2 - 10;
                      position = modulus(position + flagWidth, totalWidth) - flagWidth;
                    }
                    return `${position}%`;
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
      {props.indicator === undefined ? (
        <div className={cls(bem('indicator'))}>
          <PageIndicator {...props.indicatorProps} total={count} current={current} />
        </div>
      ) : (
        props.indicator(count, current)
      )}
    </div>
  );
});

// defaultProps defined if need
Swiper.defaultProps = {
  initialSwipe: 0,
  touchable: true,
  autoplay: 5000,
  loop: true,
};

export default Swiper;

function modulus(value: number, division: number) {
  const remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
}

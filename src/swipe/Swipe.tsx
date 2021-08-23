import React, {
  useRef,
  Children,
  cloneElement,
  ReactElement,
  forwardRef,
  useImperativeHandle,
} from 'react';
import cls from 'classnames';

import SwiperCore, { Pagination, Autoplay, Lazy } from 'swiper';

import { Swiper } from 'swiper/react';

import { SwipeProps, SwipeActionType, SwipeStatic } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('swipe');

SwiperCore.use([Autoplay, Pagination, Lazy]);

const Swipe = forwardRef<SwipeActionType, SwipeProps>((props, ref) => {
  const { children, className, autoplay, ...parseProsp } = parseOptions(props);
  const internalSwipeRef = useRef<SwipeActionType>(null);
  useImperativeHandle(ref, () => internalSwipeRef.current, [internalSwipeRef.current]);

  return (
    <Swiper
      className={cls(className, bem())}
      onSwiper={(swiper) => {
        internalSwipeRef.current = swiper;
      }}
      autoplay={autoplay as Swiper['autoplay']}
      {...parseProsp}
    >
      {Children.map(children, (child: ReactElement) =>
        cloneElement(child, { className: 'rv-swipe-item' }),
      )}
    </Swiper>
  );
});

Swipe.defaultProps = {
  initialSwipe: 0,
  duration: 500,
  pagination: true,
};

function parseOptions(opts: SwipeProps) {
  const { initialSwipe, duration, onChange, vertical, ...rest } = opts;
  if (vertical) {
    rest.direction = 'vertical';
  }
  rest.initialSlide = initialSwipe;
  rest.speed = duration;
  if (rest.autoplay && typeof rest.autoplay === 'number') {
    rest.autoplay = { delay: rest.autoplay, disableOnInteraction: false };
  }
  if (onChange) {
    const back = rest.onActiveIndexChange;
    rest.onActiveIndexChange = (sw) => {
      const idx = opts.loop ? sw.realIndex : sw.activeIndex;
      onChange?.(idx);
      back?.(sw);
    };
  }
  return rest;
}

export default Swipe as React.ForwardRefExoticComponent<SwipeProps> & SwipeStatic;

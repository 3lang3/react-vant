/**
 * rebuild swipe component
 * 3lang3
 * - rm swiperjs
 */
import React, {
  useRef,
  Children,
  cloneElement,
  ReactElement,
  forwardRef,
  useImperativeHandle,
  useContext,
} from 'react';
import cls from 'clsx';

import SwiperCore, { Pagination, Autoplay } from 'swiper';

import { Swiper } from 'swiper/react';

import { SwipeProps, SwipeInstance } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';
import { devWarning } from '../utils/dev-log';

SwiperCore.use([Autoplay, Pagination]);

const Swipe = forwardRef<SwipeInstance, SwipeProps>((props, ref) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('swipe', prefixCls);

  const { children, className, autoplay, ...parseProsp } = parseOptions(props);
  const internalSwipeRef = useRef<SwipeInstance>(null);
  useImperativeHandle(ref, () => internalSwipeRef.current, [internalSwipeRef.current]);

  devWarning(
    'Swipe',
    '`Swipe` has been deprecated. For more information read this: https://3lang3.github.io/react-vant/#/zh-CN/swipe',
  );

  return (
    <Swiper
      className={cls(className, bem())}
      onSwiper={(swiper) => {
        internalSwipeRef.current = swiper;
      }}
      autoplay={autoplay as Swiper['autoplay']}
      {...parseProsp}
    >
      {Children.toArray(children)
        .filter(Boolean)
        .map((child: ReactElement) => cloneElement(child, { className: 'rv-swipe-item' }))}
    </Swiper>
  );
});

Swipe.defaultProps = {
  initialSwipe: 0,
  duration: 500,
  pagination: true,
};

function parseOptions(opts: SwipeProps) {
  const { initialSwipe, duration, onChange, vertical, showIndicators, ...rest } = opts;
  if (vertical) {
    rest.direction = 'vertical';
  }
  if (typeof showIndicators === 'boolean') {
    if (!showIndicators) rest.pagination = false;
  }

  rest.initialSlide = initialSwipe;
  rest.speed = duration;
  if (rest.autoplay && typeof rest.autoplay === 'number') {
    rest.autoplay = { delay: rest.autoplay, disableOnInteraction: false };
  }
  if (onChange) {
    rest.onSlideChange = (sw) => {
      const idx = opts.loop ? sw.realIndex : sw.activeIndex;
      onChange?.(idx);
    };
  }
  return rest;
}

export default Swipe;

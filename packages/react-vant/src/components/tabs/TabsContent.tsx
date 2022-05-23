import React, { useRef, useEffect, useContext } from 'react';
import clsx from 'clsx';

import Swiper from '../swiper';

import { TabsContentProps } from './PropsType';
import ConfigProviderContext from '../config-provider/ConfigProviderContext';

const TabsContent: React.FC<TabsContentProps> = (props) => {
  const { prefixCls, createNamespace } = useContext(ConfigProviderContext);
  const [bem] = createNamespace('tabs', prefixCls);

  const innerEffect = useRef(false);
  const { animated, swipeable, duration, swiperRef } = props;

  const swiperProps = typeof swipeable === 'boolean' ? {} : swipeable;

  const renderChildren = () => {
    if (animated || swipeable) {
      return (
        <Swiper
          autoHeight
          {...swiperProps}
          ref={swiperRef}
          rubberband={false}
          stuckAtBoundary
          loop={false}
          autoplay={false}
          touchable={!!swipeable}
          className={clsx(bem('track'))}
          duration={+duration}
          indicator={false}
          onChange={(idx) => {
            if (innerEffect.current) {
              innerEffect.current = false;
              return;
            }
            if (props.onChange) props.onChange(idx);
          }}
        >
          {React.Children.map(props.children, (child) => (
            <Swiper.Item
              style={{ cursor: !swipeable ? 'auto' : undefined }}
              className={clsx(bem('pane-wrapper'))}
            >
              {child}
            </Swiper.Item>
          ))}
        </Swiper>
      );
    }

    return props.children;
  };
  const swipeToCurrentTab = (index: number) => {
    const swipe = swiperRef.current;
    if (!swipe) return;
    if (swipe.activeIndex !== index) {
      innerEffect.current = true;
      swipe.swipeTo(index);
    }
  };

  useEffect(() => {
    swipeToCurrentTab(props.currentIndex);
  }, [props.currentIndex]);

  return (
    <div
      className={clsx(
        bem('content', {
          animated: animated || swipeable,
        }),
      )}
    >
      {renderChildren()}
    </div>
  );
};

export default TabsContent;

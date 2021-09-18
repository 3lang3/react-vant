import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

import Swipe from '../swipe';

import { TabsContentProps } from './PropsType';
import { createNamespace } from '../utils';
import { SwipeInstance } from '../swipe/PropsType';

const [bem] = createNamespace('tabs');

const TabsContent: React.FC<TabsContentProps> = (props) => {
  const swipeRef = useRef<SwipeInstance>();
  const innerEffect = useRef(false);
  const { animated, swipeable, duration } = props;

  const renderChildren = () => {
    if (animated || swipeable) {
      return (
        <Swipe
          ref={swipeRef}
          loop={false}
          autoplay={false}
          allowTouchMove={swipeable}
          className={classnames(bem('track'))}
          duration={+duration}
          showIndicators={false}
          onChange={(idx) => {
            if (innerEffect.current) {
              innerEffect.current = false;
              return;
            }
            if (props.onChange) props.onChange(idx);
          }}
        >
          {React.Children.map(props.children, (child) => (
            <Swipe.Item
              role="tabpanel"
              style={{ cursor: !swipeable ? 'auto' : undefined }}
              className={classnames(bem('pane-wrapper'))}
            >
              {child}
            </Swipe.Item>
          ))}
        </Swipe>
      );
    }

    return props.children;
  };
  const swipeToCurrentTab = (index: number) => {
    const swipe = swipeRef.current;
    if (!swipe) return;
    if (swipe.activeIndex !== index) {
      innerEffect.current = true;
      swipe.slideTo(index, !props.inited ? 0 : +duration);
    }
  };

  useEffect(() => {
    swipeToCurrentTab(props.currentIndex);
  }, [props.currentIndex]);

  return (
    <div
      className={classnames(
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

import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

import Swipe from '../swipe';

import { TabsContentProps } from './PropsType';
import { createNamespace } from '../utils';
import { SwipeInstance } from '../swipe/PropsType';

const [bem] = createNamespace('tabs');

const TabsContent: React.FC<TabsContentProps> = (props) => {
  const swipeRef = useRef<SwipeInstance>();
  const { animated, swipeable, duration } = props;

  const renderChildren = () => {
    if (animated || swipeable) {
      return (
        <Swipe
          ref={swipeRef}
          loop={false}
          autoplay={false}
          className={classnames(bem('track'))}
          duration={+duration}
          showIndicators={false}
          onChange={props.onChange}
        >
          {React.Children.map(props.children, (child) => (
            <Swipe.Item role="tabpanel" className={classnames(bem('pane-wrapper'))}>
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

import React from 'react';
import classnames from 'classnames';

import Swipe from '../swipe';

import { TabsContentProps } from './PropsType';
import { createNamespace } from '../utils';

const [bem] = createNamespace('tabs');

const TabsContent: React.FC<TabsContentProps> = (props) => {
  const { animated, swipeable, duration, lazyRender } = props;

  const renderChildren = () => {
    if (props.animated || props.swipeable) {
      return (
        <Swipe
          // ref={swipeRef}
          loop={false}
          className={classnames(bem('track'))}
          duration={+duration * 1000}
          touchable={swipeable}
          lazyRender={lazyRender}
          showIndicators={false}
          // onChange={onChange}
        >
          {props.children}
        </Swipe>
      );
    }

    return props.children;
  };

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

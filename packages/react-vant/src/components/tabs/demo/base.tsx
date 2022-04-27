import React from 'react';
import { Button, Tabs } from 'react-vant';
import type { TabsInstance } from '../PropsType';
import './base.css';

const Item = ({ index, item }) => {
  return (
    <div className={`tabs-item tabs-${index}`}>
      <div
        style={{
          height: 100,
          overflow: 'auto',
        }}
      >
        <div style={{ width: 1000 }}>SCROLL CONTENT {item}</div>
      </div>
    </div>
  );
};

export default () => {
  const ref = React.useRef<TabsInstance>(null);
  return (
    <>
      <Tabs
        ref={ref}
        swipeable={{ preventScroll: false }}
        sticky
        stickyInitScrollbar={false}
        active={0}
      >
        {[1, 2, 3].map((item, index) => (
          <Tabs.TabPane key={item} title={`标签${item}`}>
            <Item item={item} index={index} />
          </Tabs.TabPane>
        ))}
      </Tabs>
      <Button onClick={() => ref.current.swiper.disable()}>disable</Button>
      <Button onClick={() => ref.current.swiper.enable()}>enable</Button>
    </>
  );
};

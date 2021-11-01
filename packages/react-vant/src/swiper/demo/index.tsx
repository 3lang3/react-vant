import React from 'react';
import { components } from 'site-mobile-demo';
import { Toast } from 'react-vant';
import Swiper from '..';
import './style.less';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
const items = colors.map((color, index) => (
  <Swiper.Item key={color}>
    <div
      onClick={() => {
        Toast.info(`你点击了卡片 ${index + 1}`);
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Swiper>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title="纵向滚动">
        <Swiper autoplay={false} vertical style={{ height: 150 }}>
          {items}
        </Swiper>
      </DemoBlock>
    </DemoSection>
  );
};

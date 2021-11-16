import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Toast, Image, Button, Popup } from 'react-vant';
import Swiper from '..';
import './style.less';

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
  'https://img.yzcdn.cn/vant/apple-8.jpg',
];
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
  const [visible, set] = useState(false);

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Swiper autoplay={5000}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title="懒加载">
        <Swiper>
          {images.map((image) => (
            <Swiper.Item key={image}>
              <Image lazyload src={image} />
            </Swiper.Item>
          ))}
        </Swiper>
      </DemoBlock>
      <DemoBlock title="监听onChange事件">
        <Swiper onChange={(i) => Toast(`当前索引${i}`)}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title="纵向滚动">
        <Swiper autoplay={5000} vertical style={{ height: 150 }}>
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title="自定义滑块大小">
        <Swiper slideSize={80}>{items}</Swiper>
      </DemoBlock>
      <DemoBlock title="滑块居中">
        <Swiper slideSize={80} trackOffset={10}>
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title="纵向滑块居中">
        <Swiper style={{ height: 150 }} vertical slideSize={80} trackOffset={10}>
          {items}
        </Swiper>
      </DemoBlock>
      <DemoBlock title="自定义指示器">
        <Swiper
          indicator={(total, current) => (
            <div className="custom-indicator">
              {current + 1}/{total}
            </div>
          )}
        >
          {items}
        </Swiper>
      </DemoBlock>

      <DemoBlock title="Popup中展示">
        <div className="p-default">
          <Button block round type="primary" onClick={() => set(true)}>
            Popup中展示轮播图
          </Button>
        </div>
        <Popup
          className="demo-swipe-popup"
          visible={visible}
          onClose={() => set(false)}
          style={{ width: '100%' }}
        >
          <Swiper autoplay={3000}>{items}</Swiper>
        </Popup>
      </DemoBlock>
    </DemoSection>
  );
};

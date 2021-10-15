import React, { useState } from 'react';
import { Toast, Swipe, Button, Popup, Image } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [visible, set] = useState(false);
  const images = [
    'https://img.yzcdn.cn/vant/apple-1.jpg',
    'https://img.yzcdn.cn/vant/apple-2.jpg',
    'https://img.yzcdn.cn/vant/apple-3.jpg',
    'https://img.yzcdn.cn/vant/apple-4.jpg',
  ];

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Swipe autoplay={false}>
          <Swipe.Item>1</Swipe.Item>
          <Swipe.Item>2</Swipe.Item>
          <Swipe.Item>3</Swipe.Item>
          <Swipe.Item>4</Swipe.Item>
        </Swipe>
      </DemoBlock>
      <DemoBlock title="自定义指示器">
        <Swipe
          autoplay={3000}
          pagination={{
            renderBullet: (index, className) => {
              return `<span class="custom-pagination--bullet ${className}"></span>`;
            },
          }}
        >
          <Swipe.Item>1</Swipe.Item>
          <Swipe.Item>2</Swipe.Item>
          <Swipe.Item>3</Swipe.Item>
          <Swipe.Item>4</Swipe.Item>
        </Swipe>
        <br />
        <Swipe
          autoplay={3000}
          pagination={{
            type: 'fraction',
            renderFraction: (currentClass, totalClass) => {
              return `<div class="custom-pagination--fraction"><span class="${currentClass}"></span>/<span class="${totalClass}"></span></div>`;
            },
          }}
        >
          <Swipe.Item>1</Swipe.Item>
          <Swipe.Item>2</Swipe.Item>
          <Swipe.Item>3</Swipe.Item>
          <Swipe.Item>4</Swipe.Item>
        </Swipe>
      </DemoBlock>
      <DemoBlock title="图片懒加载">
        <Swipe>
          {images.map((item) => (
            <Swipe.Item key={item}>
              <Image src={item} lazyload />
            </Swipe.Item>
          ))}
        </Swipe>
      </DemoBlock>
      <DemoBlock title="监听 change 事件">
        <Swipe
          onChange={(index: number) => {
            Toast(`当前 Swipe 索引：${index}`);
          }}
        >
          <Swipe.Item>1</Swipe.Item>
          <Swipe.Item>2</Swipe.Item>
          <Swipe.Item>3</Swipe.Item>
          <Swipe.Item>4</Swipe.Item>
        </Swipe>
      </DemoBlock>
      <DemoBlock title="纵向滚动">
        <Swipe
          autoplay={3000}
          vertical
          style={{ height: '200px' }}
          className="demo-swipe--vertical"
        >
          <Swipe.Item>1</Swipe.Item>
          <Swipe.Item>2</Swipe.Item>
          <Swipe.Item>3</Swipe.Item>
          <Swipe.Item>4</Swipe.Item>
        </Swipe>
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
          <Swipe resizeObserver autoplay={1000}>
            <Swipe.Item>1</Swipe.Item>
            <Swipe.Item>2</Swipe.Item>
            <Swipe.Item>3</Swipe.Item>
            <Swipe.Item>4</Swipe.Item>
          </Swipe>
        </Popup>
      </DemoBlock>
    </DemoSection>
  );
};

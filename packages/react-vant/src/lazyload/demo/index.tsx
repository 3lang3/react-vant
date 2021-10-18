/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { components } from 'site-mobile-demo';
import { Image, Typography } from 'react-vant';
import { Lazyload } from '..';
import './style.less';

const imageList = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
  'https://img.yzcdn.cn/vant/apple-7.jpg',
];

const LazyComponent = () => {
  useEffect(() => {
    console.log('mounted');
  }, []);
  return (
    <div>
      <Image src="https://img.yzcdn.cn/vant/apple-8.jpg" />
      <Typography.Text>
        当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
      </Typography.Text>
    </div>
  );
};

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="图片懒加载">
        {imageList.map((img) => (
          <Image lazyload src={img} key={img} />
        ))}
      </DemoBlock>
      <DemoBlock title="组件懒加载">
        <Lazyload>
          <LazyComponent />
        </Lazyload>
      </DemoBlock>
    </DemoSection>
  );
};

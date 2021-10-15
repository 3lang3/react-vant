/* eslint-disable react/no-array-index-key */
import React from 'react';
import { components } from 'site-mobile-demo';
import { Image, Typography } from 'react-vant';
import { Lazyload } from '..';
import './style.less';

const imageList = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg',
];
const backgroundImageList = [
  'https://img.yzcdn.cn/vant/apple-5.jpg',
  'https://img.yzcdn.cn/vant/apple-6.jpg',
];
const componentImageList = [
  'https://img.yzcdn.cn/vant/apple-7.jpg',
  'https://img.yzcdn.cn/vant/apple-8.jpg',
];

const SomeComponent = () => (
  <div>
    <Image src="https://img.yzcdn.cn/vant/apple-8.jpg" />
    <Typography.Text>
      当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
    </Typography.Text>
  </div>
);

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        {imageList.map((img, idx) => (
          <Image lazyload src={img} key={idx} />
        ))}
      </DemoBlock>
      <DemoBlock title="基础用法">
        <Lazyload>
          <SomeComponent />
        </Lazyload>
      </DemoBlock>
    </DemoSection>
  );
};

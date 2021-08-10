import React from 'react';
import { Cell, ImagePreview } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

const demo = ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-badge">
      <DemoBlock card title="基础用法">
        <Cell title="预览图片" isLink onClick={() => ImagePreview.open(demo)} />
      </DemoBlock>
    </DemoSection>
  );
};

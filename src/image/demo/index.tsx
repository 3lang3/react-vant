import React from 'react';
import { Image } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const src = 'https://img.yzcdn.cn/vant/cat.jpeg';
  return (
    <DemoSection className="demo-image">
      <DemoBlock title="基础用法">
        <Image width="100" height="100" src={src} />
      </DemoBlock>
    </DemoSection>
  );
};

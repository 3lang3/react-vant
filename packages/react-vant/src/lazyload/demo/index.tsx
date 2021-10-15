import React from 'react';
import { components } from 'site-mobile-demo';
import { Lazyload } from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Lazyload></Lazyload>
      </DemoBlock>
    </DemoSection>
  );
};

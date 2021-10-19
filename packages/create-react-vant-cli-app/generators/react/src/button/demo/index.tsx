import React from 'react';
import { components } from 'site-mobile-demo';
import Button from '..';
import './style.less';

export default () => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Button>测试按钮</Button>
      </DemoBlock>
    </DemoSection>
  );
};

import React from 'react';
import { Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import ConfigProvider from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title="基础用法">
        <ConfigProvider tag="section" themeVars={{ blue: '#ff4400' }}>
          <Button type="primary">测试按钮</Button>
        </ConfigProvider>
      </DemoBlock>
    </DemoSection>
  );
};

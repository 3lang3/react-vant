import React from 'react';
import { Divider } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-divider">
      <DemoBlock title="基础用法">
        <Divider />
      </DemoBlock>
      <DemoBlock title="展示文字">
        <Divider>文字</Divider>
      </DemoBlock>
      <DemoBlock title="内容位置">
        <Divider contentPosition="left">文字</Divider>
        <Divider contentPosition="right">文字</Divider>
      </DemoBlock>
      <DemoBlock title="虚线">
        <Divider dashed>文字</Divider>
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }}>
          文字
        </Divider>
      </DemoBlock>
    </DemoSection>
  );
};

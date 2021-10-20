import React from 'react';
import { components } from 'site-mobile-demo';
import { SubmitBar } from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <SubmitBar price="3050" buttonText="提交订单" onSubmit={() => console.log('submit')} />
      </DemoBlock>
    </DemoSection>
  );
};

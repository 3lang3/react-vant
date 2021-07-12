import React from 'react';
import { Toast, Icon, NavBar } from '@zhpfe/design';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <NavBar
          title="标题"
          leftArrow
          leftText="返回"
          rightText="按钮"
          onClickLeft={() => Toast('返回')}
          onClickRight={() => Toast('按钮')}
        />
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <NavBar
          title="标题"
          leftArrow
          leftText="返回"
          rightText="按钮"
          onClickLeft={() => Toast('返回')}
          rightSlot={() => <Icon name="search" size={20} />}
          onClickRight={() => Toast('按钮')}
        />
      </DemoBlock>
    </DemoSection>
  );
};

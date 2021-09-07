import React, { useState } from 'react';
import { Flex, Typography, Switch } from 'react-vant';
import { components } from 'site-mobile-demo';
import Skeleton from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [loading, setLoading] = useState(true);
  return (
    <DemoSection className="demo-skeleton">
      <DemoBlock title="基础用法">
        <Skeleton title />
      </DemoBlock>
      <DemoBlock title="显示头像">
        <Skeleton avatar />
      </DemoBlock>
      <DemoBlock title="自定义高度">
        <Skeleton title rowHeight={10} />
      </DemoBlock>
      <DemoBlock title="显示子组件">
        <Switch checked={loading} onChange={setLoading} size={24} />
        <Skeleton avatar loading={loading}>
          <Flex className="demo-preview">
            <img alt="" src="https://img.yzcdn.cn/vant/logo.png" />
            <div className="demo-content">
              <Typography.Title>关于 Vant</Typography.Title>
              <Typography.Text type="secondary">
                Vant 是一套轻量、可靠的移动端 Vue
                组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
              </Typography.Text>
            </div>
          </Flex>
        </Skeleton>
      </DemoBlock>
    </DemoSection>
  );
};

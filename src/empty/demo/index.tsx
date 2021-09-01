import React from 'react';
import { Empty, Tabs, Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基本用法">
        <Empty image="default" description="描述文字" />
      </DemoBlock>
      <DemoBlock title="图片类型">
        <Tabs>
          <Tabs.TabPane title="通用错误">
            <Empty image="error" description="描述文字" />
          </Tabs.TabPane>
          <Tabs.TabPane title="通用错误">
            <Empty image="network" description="描述文字" />
          </Tabs.TabPane>
          <Tabs.TabPane title="通用错误">
            <Empty image="search" description="描述文字" />
          </Tabs.TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock title="自定义图片">
        <Empty
          className="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="描述文字"
        />
      </DemoBlock>
      <DemoBlock title="底部内容">
        <Empty description="描述文字">
          <Button round type="primary" className="bottom-button">
            按钮
          </Button>
        </Empty>
      </DemoBlock>
    </DemoSection>
  );
};

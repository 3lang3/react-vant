import React from 'react';
import { Tag, Button } from 'react-vant';
import { components } from 'site-mobile-demo';
import { Card } from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品名称"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
      </DemoBlock>
      <DemoBlock title="营销信息">
        <Card
          tag="标签"
          num="2"
          price="2.00"
          originPrice="10.00"
          desc="描述信息"
          title="商品名称"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <Card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品名称"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          tags={
            <>
              <Tag plain type="danger" style={{ marginRight: 5 }}>
                标签
              </Tag>
              <Tag plain type="danger">
                标签
              </Tag>
            </>
          }
          footer={
            <>
              <Button size="mini" round plain style={{ marginRight: 2 }}>
                标签1
              </Button>
              <Button size="mini" round plain>
                标签2
              </Button>
            </>
          }
        />
      </DemoBlock>
    </DemoSection>
  );
};

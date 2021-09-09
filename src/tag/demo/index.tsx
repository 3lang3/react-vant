import React, { useState } from 'react';
import { Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import Tag from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [show, setShow] = useState(true);

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell title="primary 类型">
          <Tag type="primary">标签</Tag>
        </Cell>
        <Cell title="success 类型">
          <Tag type="success">标签</Tag>
        </Cell>
        <Cell title="danger  类型">
          <Tag type="danger">标签</Tag>
        </Cell>
        <Cell title="warning  类型">
          <Tag type="warning">标签</Tag>
        </Cell>
      </DemoBlock>
      <DemoBlock card title="样式风格">
        <Cell title="空心样式">
          <Tag plain type="primary">
            标签
          </Tag>
        </Cell>
        <Cell title="圆角样式">
          <Tag round type="primary">
            标签
          </Tag>
        </Cell>
        <Cell title="标记样式">
          <Tag mark type="primary">
            标签
          </Tag>
        </Cell>
        <Cell title="可关闭标签">
          <Tag
            show={show}
            plain
            closeable
            size="medium"
            type="primary"
            onClose={() => setShow(false)}
          >
            标签
          </Tag>
        </Cell>
      </DemoBlock>
      <DemoBlock card title="标签大小">
        <Cell title="小号标签">
          <Tag type="primary">标签</Tag>
        </Cell>
        <Cell title="中号标签">
          <Tag size="medium" type="primary">
            标签
          </Tag>
        </Cell>
        <Cell title="大号标签">
          <Tag size="large" type="primary">
            标签
          </Tag>
        </Cell>
      </DemoBlock>
      <DemoBlock card title="自定义颜色">
        <Cell title="背景颜色">
          <Tag color="#7232dd">标签</Tag>
        </Cell>
        <Cell title="文字颜色">
          <Tag color="#ffe1e1" textColor="#ad0000">
            标签
          </Tag>
        </Cell>
        <Cell title="空心颜色">
          <Tag color="#7232dd" plain>
            标签
          </Tag>
        </Cell>
      </DemoBlock>
    </DemoSection>
  );
};

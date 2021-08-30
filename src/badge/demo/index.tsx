import React from 'react';
import { Badge, Icon } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title="基础用法">
        <Badge content={5}>
          <div className="child" />
        </Badge>
        <Badge content={10}>
          <div className="child" />
        </Badge>
        <Badge content="hot">
          <div className="child" />
        </Badge>
        <Badge dot>
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title="最大值">
        <Badge content={20} max={9}>
          <div className="child" />
        </Badge>
        <Badge content="99" max="20">
          <div className="child" />
        </Badge>
        <Badge content="9999" max="99">
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Badge content={5} color="#1989fa">
          <div className="child" />
        </Badge>
        <Badge content={10} color="#1989fa">
          <div className="child" />
        </Badge>
        <Badge color="#1989fa" dot>
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title="自定义徽标内容">
        <Badge content={<Icon name="success" className="badge-icon" />}>
          <div className="child" />
        </Badge>
        <Badge content={<Icon name="cross" className="badge-icon" />}>
          <div className="child" />
        </Badge>
        <Badge content={<Icon name="down" className="badge-icon" />}>
          <div className="child" />
        </Badge>
      </DemoBlock>
      <DemoBlock title="独立展示">
        <Badge content="20" style={{ marginRight: 16 }} />
        <Badge content="200" max="99" />
      </DemoBlock>
    </DemoSection>
  );
};

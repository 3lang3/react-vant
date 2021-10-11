import React from 'react';
import { components } from 'site-mobile-demo';
import Typography from '..'
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title="文本">
        <Typography.Text>
          In the process of <Typography.Text type="danger">internal</Typography.Text>{' '}
          <Typography.Text delete>desktop</Typography.Text>applications development,
          <Typography.Text type="primary"> many different</Typography.Text> design specs and{' '}
          <Typography.Text underline>implementations</Typography.Text>would be{' '}
          <Typography.Text type="warning">involved</Typography.Text>
        </Typography.Text>
      </DemoBlock>
      <DemoBlock title="不同类型">
        <Typography.Text type="danger">这是一条文本</Typography.Text>
        <Typography.Text type="primary">这是一条文本</Typography.Text>
        <Typography.Text type="warning">这是一条文本</Typography.Text>
        <Typography.Text type="secondary">这是一条文本</Typography.Text>
      </DemoBlock>
      <DemoBlock title="文本省略">
        <Typography.Text ellipsis>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved
        </Typography.Text>
      </DemoBlock>
      <DemoBlock title="多行文本省略">
        <Typography.Text ellipsis={2}>
          In the process of internal desktop applications development, many different design specs
          and implementations would be involved
        </Typography.Text>
      </DemoBlock>
      <DemoBlock title="标题">
        <Typography.Title level={1}>一级测试标题</Typography.Title>
        <Typography.Title level={2}>二级测试标题</Typography.Title>
        <Typography.Title level={3}>三级测试标题</Typography.Title>
        <Typography.Title level={4}>四级测试标题</Typography.Title>
        <Typography.Title level={5}>五级测试标题</Typography.Title>
      </DemoBlock>
      <DemoBlock title="链接">
        <Typography.Link>测试Link</Typography.Link>
      </DemoBlock>
    </DemoSection>
  );
};

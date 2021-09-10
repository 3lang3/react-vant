import React from 'react';
import { components } from 'site-mobile-demo';
import Flex from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Flex justify="center" align="center">
          <Flex.Item span={12}>span: 12</Flex.Item>
          <Flex.Item span={12}>span: 12</Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
        </Flex>
      </DemoBlock>
      <DemoBlock title="区域间隔">
        <Flex gutter={16}>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
          <Flex.Item span={8}>span: 8</Flex.Item>
        </Flex>
      </DemoBlock>
      <DemoBlock title="方向">
        <Flex direction="row">
          <Flex.Item span={8}>span: 8-1</Flex.Item>
          <Flex.Item span={8}>span: 8-2</Flex.Item>
          <Flex.Item span={8}>span: 8-3</Flex.Item>
        </Flex>
        <Flex direction="row-reverse">
          <Flex.Item span={8}>span: 8-1</Flex.Item>
          <Flex.Item span={8}>span: 8-2</Flex.Item>
          <Flex.Item span={8}>span: 8-3</Flex.Item>
        </Flex>
      </DemoBlock>
    </DemoSection>
  );
};

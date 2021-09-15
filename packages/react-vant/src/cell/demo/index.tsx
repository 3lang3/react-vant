import React from 'react';
import { Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Cell.Group>
          <Cell title="单元格" value="内容" />
          <Cell title="单元格" value="内容" label="描述信息" />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="单元格大小">
        <Cell title="单元格" value="内容" size="large" />
        <Cell title="单元格" value="内容" label="描述信息" size="large" />
      </DemoBlock>
      <DemoBlock title="展示图标">
        <Cell title="单元格" icon="location-o" />
      </DemoBlock>
      <DemoBlock title="只设置value">
        <Cell value="内容" />
      </DemoBlock>
      <DemoBlock title="展示箭头">
        <Cell title="单元格" isLink />
        <Cell title="单元格" isLink value="内容" />
        <Cell title="单元格" isLink arrowDirection="down" value="内容" />
      </DemoBlock>
      <DemoBlock title="分组标题">
        <Cell.Group title="分组1">
          <Cell title="单元格" value="内容" />
        </Cell.Group>
        <Cell.Group title="分组2">
          <Cell title="单元格" value="内容" />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="卡片类型">
        <Cell.Group inset>
          <Cell title="单元格" value="内容" />
          <Cell title="单元格" value="内容" />
        </Cell.Group>
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <Cell title="单元格" icon="shop-o">
          <div>自定义内容</div>
        </Cell>
      </DemoBlock>
      <DemoBlock title="垂直居中">
        <Cell center title="单元格" value="内容" label="描述信息" />
      </DemoBlock>
    </DemoSection>
  );
};

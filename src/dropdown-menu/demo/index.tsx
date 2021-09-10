import React, { useState } from 'react';
import { Cell, Switch } from 'react-vant';
import { components } from 'site-mobile-demo';
import DropdownMenu from '..';
import './style.less';

const option1 = [
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 },
];
const option2 = [
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' },
];

export default (): React.ReactNode => {
  const [value, setValue] = useState<Record<string, string | number>>({});
  const { DemoBlock, DemoSection } = components;

  return (
    <DemoSection className="demo-badge">
      <DemoBlock title="基础用法">
        <DropdownMenu value={value} onChange={(v) => setValue(v)}>
          <DropdownMenu.Item name="value1" options={option1} />
          <DropdownMenu.Item name="value2" options={option2} />
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title="自定义菜单内容">
        <DropdownMenu value={value} onChange={(v) => setValue(v)}>
          <DropdownMenu.Item name="value1" options={option1} />
          <DropdownMenu.Item title="筛选" name="value2">
            <Cell center title="包邮" rightIcon={<Switch size={24} />} />
            <Cell center title="团购" rightIcon={<Switch size={24} />} />
          </DropdownMenu.Item>
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title="自定义选中颜色">
        <DropdownMenu activeColor="#f44336" value={value} onChange={(v) => setValue(v)}>
          <DropdownMenu.Item name="value1" options={option1} />
          <DropdownMenu.Item name="value2" options={option2} />
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title="向上展开">
        <DropdownMenu direction="up" value={value} onChange={(v) => setValue(v)}>
          <DropdownMenu.Item name="value1" options={option1} />
          <DropdownMenu.Item name="value2" options={option2} />
        </DropdownMenu>
      </DemoBlock>
      <DemoBlock title="禁用菜单">
        <DropdownMenu value={value} onChange={(v) => setValue(v)}>
          <DropdownMenu.Item disabled name="value1" options={option1} />
          <DropdownMenu.Item disabled name="value2" options={option2} />
        </DropdownMenu>
      </DemoBlock>
    </DemoSection>
  );
};

/* eslint-disable no-console */
import React, { useState } from 'react';
import { Dialog, Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import Switch from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [value, setValue] = useState(false);

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Switch defaultChecked onChange={(checked) => console.log(`switch to ${checked}`)} />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Switch disabled defaultChecked />
      </DemoBlock>
      <DemoBlock title="加载状态">
        <Switch loading defaultChecked />
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Switch size="24px" defaultChecked />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Switch activeColor="#ee0a24" inactiveColor="#dcdee0" defaultChecked />
      </DemoBlock>
      <DemoBlock title="异步控制">
        <Switch
          checked={value}
          onChange={(checked) => {
            Dialog.confirm({
              title: '提醒',
              message: '是否切换开关？',
            }).then(() => {
              setValue(checked);
            });
          }}
        />
      </DemoBlock>
      <DemoBlock title="搭配单元格使用">
        <Cell
          center
          title="标题"
          rightIcon={
            <Switch
              size={24}
              defaultChecked
              onChange={(checked) => console.log(`switch to ${checked}`)}
            />
          }
        />
      </DemoBlock>
    </DemoSection>
  );
};

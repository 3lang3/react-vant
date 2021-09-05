/* eslint-disable no-console */
import React, { useState } from 'react';
import { Checkbox, Cell, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [value, setValue] = useState(false);

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Checkbox defaultChecked onChange={(val) => console.log(val)}>
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Checkbox defaultChecked disabled>
          复选框
        </Checkbox>
        <Checkbox defaultChecked={false} disabled>
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义形状">
        <Checkbox defaultChecked shape="square">
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Checkbox defaultChecked checkedColor="#ee0a24">
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Checkbox defaultChecked iconSize="24px">
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="禁止文本点击">
        <Checkbox defaultChecked labelDisabled>
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="动态更新">
        <Checkbox
          checked={value}
          onChange={(val) => {
            Toast.loading({ forbidClick: true, duration: 0 });

            setTimeout(() => {
              Toast.clear();
              setValue(val);
            }, 500);
          }}
        >
          复选框
        </Checkbox>
      </DemoBlock>

      <DemoBlock title="复选框组">
        <Checkbox.Group defaultValue={['a', 'b']}>
          <Checkbox name="a">复选框a</Checkbox>
          <Checkbox name="b">复选框b</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="水平排列">
        <Checkbox.Group defaultValue={[]} direction="horizontal">
          <Checkbox name="a">复选框a</Checkbox>
          <Checkbox name="b">复选框b</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="限制最大可选数">
        <Checkbox.Group defaultValue={[]} max={2}>
          <Checkbox name="a">复选框a</Checkbox>
          <Checkbox name="b">复选框b</Checkbox>
          <Checkbox name="c">复选框c</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="搭配单元格组件使用">
        <Checkbox.Group defaultValue={[]} max={2}>
          <Cell.Group>
            <Cell title="单选框1" icon="shop-o" rightIcon={<Checkbox name="a" />} />
            <Cell title="单选框2" icon="shop-o" rightIcon={<Checkbox name="b" />} />
          </Cell.Group>
        </Checkbox.Group>
      </DemoBlock>
    </DemoSection>
  );
};

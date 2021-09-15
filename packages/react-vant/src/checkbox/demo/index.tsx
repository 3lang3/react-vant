/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { Button, Cell, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import { CheckboxGroupInstance } from '../PropsType';
import Checkbox from '..';
import './style.less';

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png';
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const ref = useRef<CheckboxGroupInstance>(null);
  const [checkAll, setCheckAll] = useState(['a']);
  const [cellCheck, setCellCheck] = useState([]);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(false);

  const toggle = (name) => {
    const newValue = cellCheck.includes(name)
      ? cellCheck.filter((el) => el !== name)
      : [...cellCheck, name];
    setCellCheck(newValue);
  };

  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <Checkbox checked={checked} onChange={setChecked}>
          复选框
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Checkbox defaultChecked disabled>
          复选框
        </Checkbox>
        <Checkbox disabled>复选框</Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义形状">
        <Checkbox defaultChecked shape="square">
          自定义形状
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Checkbox defaultChecked checkedColor="#ee0a24">
          自定义颜色
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Checkbox defaultChecked iconSize="24px">
          自定义大小
        </Checkbox>
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Checkbox
          defaultChecked
          iconRender={({ checked: isActive }) => (
            <img alt="" src={isActive ? activeIcon : inactiveIcon} />
          )}
        >
          自定义图标
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
        <Checkbox.Group onChange={(v) => console.log(v)} defaultValue={['a', 'b']}>
          <Checkbox name="a">复选框a</Checkbox>
          <Checkbox name="b">复选框b</Checkbox>
          <Checkbox name="c">复选框c</Checkbox>
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
      <DemoBlock title="全选与反选">
        <Checkbox.Group ref={ref} value={checkAll} onChange={setCheckAll}>
          <Checkbox name="a">复选框a</Checkbox>
          <Checkbox name="b">复选框b</Checkbox>
          <Checkbox name="c">复选框c</Checkbox>
        </Checkbox.Group>
        <div className="demo-checkbox-buttons">
          <Button type="primary" onClick={() => ref.current?.toggleAll(true)}>
            全选
          </Button>
          <Button type="primary" onClick={() => ref.current?.toggleAll()}>
            反选
          </Button>
        </div>
      </DemoBlock>
      <DemoBlock title="搭配单元格组件使用">
        <Checkbox.Group value={cellCheck} onChange={setCellCheck}>
          <Cell.Group>
            <Cell
              clickable
              title="单选框1"
              icon="shop-o"
              onClick={() => toggle('a')}
              rightIcon={<Checkbox name="a" />}
            />
            <Cell
              clickable
              title="单选框2"
              icon="shop-o"
              onClick={() => toggle('b')}
              rightIcon={<Checkbox name="b" />}
            />
          </Cell.Group>
        </Checkbox.Group>
      </DemoBlock>
    </DemoSection>
  );
};

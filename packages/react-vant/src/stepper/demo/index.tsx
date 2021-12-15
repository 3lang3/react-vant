/* eslint-disable no-console */
import React, { useState } from 'react';
import { Cell, Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import Stepper from '..';

let timer;

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;

  const [value1, setValue1] = useState<string | number>(1);
  const [value9, setValue9] = useState<string | number>(0);
  const [value2, setValue2] = useState<string | number>(1);
  const [value3, setValue3] = useState<string | number>(1);
  const [value4, setValue4] = useState<string | number>(1);
  const [value5, setValue5] = useState<string | number>(1);
  const [value6, setValue6] = useState<string | number>(1);
  const [value7, setValue7] = useState<string | number>(1);
  const [value8, setValue8] = useState<string | number>(1);
  return (
    <DemoSection className="demo-stepper">
      <DemoBlock card>
        <Cell title="基础用法" center>
          <Stepper
            min={0}
            value={value1}
            onMinus={() => console.log('minus')}
            onPlus={() => console.log('plus')}
            onFocus={() => console.log('focus')}
            onBlur={() => console.log('blur')}
            onOverlimit={() => console.log('overlimit')}
            onChange={(v) => {
              console.log('change', v, typeof v);
              setValue1(v);
            }}
          />
        </Cell>
        <Cell title="设置最小值" center>
          <Stepper
            min={0}
            value={value9}
            onChange={(v) => {
              setValue9(v);
            }}
          />
        </Cell>
        <Cell title="步长设置" center>
          <Stepper value={value2} step="2" onChange={(val) => setValue2(val)} />
        </Cell>
        <Cell title="设置输入范围" center>
          <Stepper value={value3} step="2" min="5" max="8" onChange={(val) => setValue3(val)} />
        </Cell>
        <Cell title="禁用状态" center>
          <Stepper value={1} disabled />
        </Cell>
        <Cell title="禁用输入框" center>
          <Stepper value={value4} onChange={(val) => setValue4(val)} disableInput />
        </Cell>
        <Cell title="固定小数位数" center>
          <Stepper value={value5} onChange={(val) => setValue5(val)} step="0.2" decimalLength="1" />
        </Cell>
        <Cell title="自定义大小" center>
          <Stepper
            value={value6}
            onChange={(val) => setValue6(val)}
            inputWidth="44px"
            buttonSize="28px"
          />
        </Cell>
        <Cell title="异步变更" center>
          <Stepper
            value={value7}
            onChange={(val) => {
              Toast.loading({ forbidClick: true });

              clearTimeout(timer);
              timer = setTimeout(() => {
                Toast.clear();
                // 注意此时修改 value 后会再次触发 change 事件
                setValue7(val);
              }, 500);
            }}
          />
        </Cell>
        <Cell title="圆角风格" center>
          <Stepper
            value={value8}
            onChange={(val) => setValue8(val)}
            theme="round"
            buttonSize="22"
            disableInput
          />
        </Cell>
      </DemoBlock>
    </DemoSection>
  );
};

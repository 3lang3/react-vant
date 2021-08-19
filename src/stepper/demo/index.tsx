import React, { useState } from 'react';
import { Cell, Stepper, Toast } from 'react-vant';
import './style.less';

let timer;

export default (): React.ReactNode => {
  const [value1, setValue1] = useState('1');
  const [value2, setValue2] = useState('1');
  const [value3, setValue3] = useState('1');
  const [value4, setValue4] = useState('1');
  const [value5, setValue5] = useState('1');
  const [value6, setValue6] = useState('1');
  const [value7, setValue7] = useState('1');
  const [value8, setValue8] = useState('1');

  return (
    <>
      <Cell title="基础用法" center>
        <Stepper
          value={value1}
          onChange={(val) => {
            setValue1(val);
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
        <Stepper value="1" disabled />
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
    </>
  );
};

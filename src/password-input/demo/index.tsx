/* eslint-disable no-console */
import React from 'react';
import { PasswordInput, Dialog } from 'react-vant';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const onSubmit = (val: string) => {
    Dialog.alert({
      message: val,
    });
  };
  const onChange = (val: string) => {
    console.log('onchange', val);
  };
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <PasswordInput value="12a" length={4} type="text" onSubmit={onSubmit} />
      </DemoBlock>

      <DemoBlock title="限制长度">
        <PasswordInput type="text" length={6} onSubmit={onSubmit} />
      </DemoBlock>

      <DemoBlock title="只允许数字">
        <PasswordInput
          type="number"
          value="12"
          mask={false}
          length={4}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </DemoBlock>

      <DemoBlock title="自定义规则 只允许输入0-3">
        <PasswordInput
          value="123"
          mask={false}
          length={4}
          validator={(val: string) => {
            return /^[0-3]{0,4}$/.test(val);
          }}
          onSubmit={onSubmit}
        />
      </DemoBlock>

      <DemoBlock title="自动聚焦">
        <PasswordInput length={4} autoFocus onSubmit={onSubmit} />
      </DemoBlock>
    </DemoSection>
  );
};

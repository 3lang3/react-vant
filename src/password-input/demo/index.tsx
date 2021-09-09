/* eslint-disable no-console */
import React from 'react';
import { Dialog } from 'react-vant';
import { components } from 'site-mobile-demo';
import PasswordInput from '..';
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
        <PasswordInput onSubmit={onSubmit} />
      </DemoBlock>

      <DemoBlock title="限制长度">
        <PasswordInput length={4} onSubmit={onSubmit} />
      </DemoBlock>

      <DemoBlock title="格子间距">
        <PasswordInput gutter={10} onSubmit={onSubmit} />
      </DemoBlock>

      <DemoBlock title="明文展示">
        <PasswordInput value="123" mask={false} onSubmit={onSubmit} />
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

      <DemoBlock title="提示信息">
        <PasswordInput onSubmit={onSubmit} info={<div>密码为6位数字</div>} />
      </DemoBlock>
    </DemoSection>
  );
};

import React, { useState } from 'react';
import { Search, Toast } from '@zhpfe/design';
import { components } from 'site-mobile-demo';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [value0, setValue0] = useState('');
  const [value1, setValue1] = useState('');
  return (
    <DemoSection>
      <DemoBlock title="基本用法">
        <Search
          placeholder="请输入搜索关键词"
          value={value0}
          onChange={(val) => {
            console.log('onChange----', val);
            setValue0(val);
          }}
          onSearch={(val) => {
            console.log('onSearch', val);
          }}
        />
      </DemoBlock>

      <DemoBlock title="事件监听">
        <Search
          value={value1}
          label="搜索"
          placeholder="请输入搜索关键词"
          showAction
          actionText="取消"
          onChange={(val) => {
            setValue1(val);
          }}
          onSearch={(val) => {
            Toast(val);
            setValue0(val);
          }}
          onCancel={() => {
            Toast('取消');
            setValue1('');
          }}
        />
      </DemoBlock>

      <DemoBlock title="禁用搜索框">
        <Search placeholder="请输入搜索关键词" disabled />
      </DemoBlock>

      <DemoBlock title="自定义背景色 & maxLength">
        <Search shape="round" placeholder="请输入搜索关键词" background="#4fc08d" maxlength="6" />
      </DemoBlock>
    </DemoSection>
  );
};

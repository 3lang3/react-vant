/* eslint-disable no-console */
import React, { useState } from 'react';
import { Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import Search from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [value0, setValue0] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
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
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          onSearch={(val) => {
            console.log('onSearch', val);
          }}
        />
      </DemoBlock>

      <DemoBlock title="事件监听">
        <Search
          value={value1}
          placeholder="请输入搜索关键词"
          showAction
          actionText="取消"
          onChange={(val) => {
            setValue1(val);
          }}
          onSearch={(val) => {
            Toast(val);
            setValue1(val);
          }}
          onCancel={() => {
            Toast('取消');
            setValue1('');
          }}
          onClear={() => {
            Toast('清除');
            setValue1('');
          }}
          onClickInput={() => {
            Toast('点击输入区域时触发	');
          }}
        />
      </DemoBlock>

      <DemoBlock title="搜索框内容对齐">
        <Search placeholder="请输入搜索关键词" inputAlign="center" />
      </DemoBlock>

      <DemoBlock title="禁用搜索框">
        <Search placeholder="请输入搜索关键词" disabled />
      </DemoBlock>

      <DemoBlock title="自定义背景色 & maxLength">
        <Search shape="round" placeholder="请输入搜索关键词" background="#4fc08d" maxlength={6} />
      </DemoBlock>

      <DemoBlock title="自定义按钮">
        <Search
          value={value2}
          onChange={setValue2}
          label="地址"
          placeholder="请输入搜索关键词"
          actionText={<div onClick={() => Toast.info(value2)}>搜索</div>}
          showAction
        />
      </DemoBlock>
    </DemoSection>
  );
};

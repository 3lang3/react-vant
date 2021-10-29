/* eslint-disable no-console */
import React from 'react';
import { components } from 'site-mobile-demo';
import { Checkbox } from 'react-vant';
import { SubmitBar } from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <SubmitBar price="3050" buttonText="提交订单" onSubmit={() => console.log('submit')} />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <SubmitBar
          disabled
          price="3050"
          tip="你的收货地址不支持同城送, 我们已为你推荐快递"
          tipIcon="info-o"
          buttonText="提交订单"
          onSubmit={() => console.log('submit')}
        />
      </DemoBlock>
      <DemoBlock title="加载状态">
        <SubmitBar
          loading
          price="3050"
          buttonText="提交订单"
          onSubmit={() => console.log('submit')}
        />
      </DemoBlock>
      <DemoBlock title="高级用法">
        <SubmitBar
          price="3050"
          buttonText="提交订单"
          tip={
            <>
              你的收货地址不支持同城送，
              <span className="edit-address">修改地址</span>
            </>
          }
          onSubmit={() => console.log('submit')}
        >
          <Checkbox>全选</Checkbox>
        </SubmitBar>
      </DemoBlock>
    </DemoSection>
  );
};

/* eslint-disable no-console */
import React from 'react';
import { components } from 'site-mobile-demo';
import ActionBar from '..';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  return (
    <DemoSection>
      <DemoBlock title="基础用法">
        <ActionBar>
          <ActionBar.Icon icon="chat-o" text="客服" onClick={() => console.log('chat click')} />
          <ActionBar.Icon icon="cart-o" text="购物车" onClick={() => console.log('cart click')} />
          <ActionBar.Icon icon="shop-o" text="店铺" onClick={() => console.log('shop click')} />
          <ActionBar.Button
            type="danger"
            text="立即购买"
            onClick={() => console.log('button click')}
          />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title="徽标提示">
        <ActionBar>
          <ActionBar.Icon
            icon="chat-o"
            badge={{ dot: true }}
            text="客服"
            onClick={() => console.log('chat click')}
          />
          <ActionBar.Icon
            icon="cart-o"
            badge={{ content: 5 }}
            text="购物车"
            onClick={() => console.log('cart click')}
          />
          <ActionBar.Icon
            icon="shop-o"
            badge={{ content: 12 }}
            text="店铺"
            onClick={() => console.log('shop click')}
          />
          <ActionBar.Button
            type="warning"
            text="加入购物车"
            onClick={() => console.log('addcart button click')}
          />
          <ActionBar.Button
            type="danger"
            text="立即购买"
            onClick={() => console.log('buy button click')}
          />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title="自定义图标颜色">
        <ActionBar>
          <ActionBar.Icon
            icon="chat-o"
            color="#ee0a24"
            text="客服"
            onClick={() => console.log('chat click')}
          />
          <ActionBar.Icon
            icon="cart-o"
            text="购物车"
            onClick={() => console.log('cart click')}
          />
          <ActionBar.Icon
            icon="star"
            color="#ff5000"
            text="店铺"
            onClick={() => console.log('shop click')}
          />
          <ActionBar.Button
            type="warning"
            text="加入购物车"
            onClick={() => console.log('addcart button click')}
          />
          <ActionBar.Button
            type="danger"
            text="立即购买"
            onClick={() => console.log('buy button click')}
          />
        </ActionBar>
      </DemoBlock>
      <DemoBlock title="自定义按钮颜色">
        <ActionBar>
          <ActionBar.Icon
            icon="chat-o"
            text="客服"
            onClick={() => console.log('chat click')}
          />
          <ActionBar.Icon
            icon="cart-o"
            text="购物车"
            onClick={() => console.log('cart click')}
          />
          <ActionBar.Button
            color="#be99ff"
            type="warning"
            text="加入购物车"
            onClick={() => console.log('addcart button click')}
          />
          <ActionBar.Button
            color="#7232dd"
            type="danger"
            text="立即购买"
            onClick={() => console.log('buy button click')}
          />
        </ActionBar>
      </DemoBlock>
    </DemoSection>
  );
};

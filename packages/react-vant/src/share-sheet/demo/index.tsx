/* eslint-disable no-console */
import React, { useState } from 'react';
import { Cell } from 'react-vant';
import { components } from 'site-mobile-demo';
import ShareSheet from '..';
import './style.less';

const options = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

const optionsMuli = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
];

const customOptions = [
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
];

const descOptions = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link', description: '描述信息' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const show1 = () => setVisible1(true);
  const close1 = () => setVisible1(false);
  const show2 = () => setVisible2(true);
  const close2 = () => setVisible2(false);
  const show3 = () => setVisible3(true);
  const close3 = () => setVisible3(false);
  const show4 = () => setVisible4(true);
  const close4 = () => setVisible4(false);
  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell isLink title="显示分享面板" onClick={show1} />
      </DemoBlock>
      <DemoBlock card title="展示多行选项">
        <Cell isLink title="显示分享面板" onClick={show2} />
      </DemoBlock>
      <DemoBlock card title="自定义图标">
        <Cell isLink title="显示分享面板" onClick={show3} />
      </DemoBlock>
      <DemoBlock card title="展示描述信息">
        <Cell isLink title="显示分享面板" onClick={show4} />
      </DemoBlock>

      <ShareSheet
        visible={visible1}
        options={options}
        title="立即分享给好友"
        onCancel={close1}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close1();
        }}
      />
      <ShareSheet
        visible={visible2}
        options={optionsMuli}
        title="立即分享给好友"
        onCancel={close2}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close2();
        }}
      />
      <ShareSheet
        visible={visible3}
        options={customOptions}
        onCancel={close3}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close3();
        }}
      />

      <ShareSheet
        visible={visible4}
        options={descOptions}
        title="立即分享给好友"
        description="描述信息"
        onCancel={close4}
        onSelect={(option, index) => {
          console.log('option', option);
          console.log('index', index);
          close4();
        }}
      />
    </DemoSection>
  );
};

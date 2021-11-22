import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';
import React, { useState } from 'react';
import { Toast } from 'react-vant';
import { components } from 'site-mobile-demo';
import Tabbar from '..';
import './style.less';

const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
};

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [name, setName] = useState('setting');
  return (
    <DemoSection className="demo-badge">
      <DemoBlock title="基础用法">
        <Tabbar>
          <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title="通过名称匹配">
        <Tabbar
          value={name}
          onChange={(v) => {
            setName(v as string);
          }}
        >
          <Tabbar.Item name="home" icon={<HomeO />}>
            标签
          </Tabbar.Item>
          <Tabbar.Item name="search" icon={<Search />}>
            标签
          </Tabbar.Item>
          <Tabbar.Item name="firends" icon={<FriendsO />}>
            标签
          </Tabbar.Item>
          <Tabbar.Item name="setting" icon={<SettingO />}>
            标签
          </Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title="徽标提示">
        <Tabbar>
          <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
          <Tabbar.Item badge={{ dot: true }} icon={<Search />}>
            标签
          </Tabbar.Item>
          <Tabbar.Item badge={{ content: 5 }} icon={<FriendsO />}>
            标签
          </Tabbar.Item>
          <Tabbar.Item badge={{ content: 20 }} icon={<SettingO />}>
            标签
          </Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Tabbar>
          <Tabbar.Item icon={(ac) => <img alt="" src={ac ? icon.active : icon.inactive} />}>
            标签
          </Tabbar.Item>
          <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Tabbar activeColor="#f44336" inactiveColor="#000">
          <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
        </Tabbar>
      </DemoBlock>
      <DemoBlock title="监听切换事件">
        <Tabbar onChange={(v) => Toast.info(`标签${+v + 1}`)}>
          <Tabbar.Item icon={<HomeO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<Search />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<FriendsO />}>标签</Tabbar.Item>
          <Tabbar.Item icon={<SettingO />}>标签</Tabbar.Item>
        </Tabbar>
      </DemoBlock>
    </DemoSection>
  );
};

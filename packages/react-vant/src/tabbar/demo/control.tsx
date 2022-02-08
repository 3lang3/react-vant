import React, { useState } from 'react';
import { Tabbar } from 'react-vant';
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';

export default () => {
  const [name, setName] = useState('setting');
  return (
    <Tabbar value={name} onChange={(v: string) => setName(v)}>
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
  );
};

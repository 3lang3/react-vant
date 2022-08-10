import React from 'react'
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

export default () => {
  return (
    <div className='demo-tabbar'>
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
    </div>
  )
}

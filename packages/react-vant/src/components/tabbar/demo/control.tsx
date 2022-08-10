import React from 'react'
import { Tabbar } from 'react-vant'
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons'

export default () => {
  const [name, setName] = React.useState('setting')
  return (
    <div className='demo-tabbar'>
      <Tabbar value={name} onChange={v => setName(v as string)}>
        <Tabbar.Item name='home' icon={<HomeO />}>
          标签
        </Tabbar.Item>
        <Tabbar.Item name='search' icon={<Search />}>
          标签
        </Tabbar.Item>
        <Tabbar.Item name='firends' icon={<FriendsO />}>
          标签
        </Tabbar.Item>
        <Tabbar.Item name='setting' icon={<SettingO />}>
          标签
        </Tabbar.Item>
      </Tabbar>
    </div>
  )
}

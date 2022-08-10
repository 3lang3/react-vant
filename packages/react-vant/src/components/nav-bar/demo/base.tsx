import React from 'react'
import { Toast, NavBar } from 'react-vant'
import { Search } from '@react-vant/icons'

export default () => {
  return (
    <>
      <NavBar
        title='标题'
        leftText='返回'
        rightText='按钮'
        onClickLeft={() => Toast('返回')}
        onClickRight={() => Toast('按钮')}
      />
      <NavBar
        title='标题'
        leftText='返回'
        onClickLeft={() => Toast('返回')}
        rightText={<Search fontSize={20} />}
        onClickRight={() => Toast('按钮')}
      />
    </>
  )
}

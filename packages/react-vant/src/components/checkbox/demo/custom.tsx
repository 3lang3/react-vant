import React from 'react'
import { Checkbox } from 'react-vant'
import './custom.less'

const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png'
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png'

export default () => {
  return (
    <div className='demo-checkbox'>
      <Checkbox defaultChecked shape='square'>
        自定义形状
      </Checkbox>
      <br />
      <Checkbox defaultChecked checkedColor='#ee0a24'>
        自定义颜色
      </Checkbox>
      <br />
      <Checkbox defaultChecked iconSize='24px'>
        自定义大小
      </Checkbox>
      <br />
      <Checkbox
        defaultChecked
        iconRender={({ checked: isActive }) => (
          <img alt='' src={isActive ? activeIcon : inactiveIcon} />
        )}
      >
        自定义图标
      </Checkbox>
    </div>
  )
}

/* eslint-disable no-console */
import React from 'react'
import { Checkbox } from 'react-vant'
import './style.less'

export default () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className='demo-checkbox'>
      <Checkbox checked={checked} onChange={setChecked}>
        复选框
      </Checkbox>
      <Checkbox defaultChecked onChange={val => console.log(val)}>
        默认勾选
      </Checkbox>
      <br />
      <Checkbox disabled>禁用复选框</Checkbox>
      <br />
      <Checkbox defaultChecked labelDisabled>
        禁止文本点击
      </Checkbox>
    </div>
  )
}

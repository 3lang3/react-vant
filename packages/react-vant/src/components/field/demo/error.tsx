import React, { useState } from 'react'
import { Cell, Field } from 'react-vant'

export default () => {
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <>
      <Cell.Group>
        <Field
          value={username}
          error
          required
          label='用户名'
          placeholder='请输入用户名'
          onChange={setUsername}
        />
        <Field
          value={phone}
          required
          label='手机号'
          placeholder='请输入手机号'
          errorMessage='手机号格式错误'
          onChange={setPhone}
        />
      </Cell.Group>
    </>
  )
}

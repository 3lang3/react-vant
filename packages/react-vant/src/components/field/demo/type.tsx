import React, { useState } from 'react'
import { Field } from 'react-vant'

export default () => {
  const [tel, setTel] = useState('')
  const [digit, setDigit] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPasswrod] = useState('')

  return (
    <>
      <Field
        value={tel}
        type='tel'
        label='手机号'
        onChange={setTel}
        placeholder='请输入手机号'
      />
      <Field
        value={digit}
        type='digit'
        label='整数'
        onChange={setDigit}
        placeholder='请输入整数'
      />
      <Field
        value={number}
        type='number'
        label='数字'
        onChange={setNumber}
        placeholder='请输入数字'
      />
      <Field
        value={password}
        type='password'
        label='密码'
        onChange={setPasswrod}
        placeholder='请输入密码'
      />
    </>
  )
}

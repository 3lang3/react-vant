import React from 'react'
import { Cell, Input, hooks } from 'react-vant'

export default () => {
  const [state, updateState] = hooks.useSetState({
    text: '',
    tel: '',
    digit: '',
    num: '',
    password: '',
  })
  return (
    <>
      <Cell>
        <Input
          value={state.text}
          onChange={text => updateState({ text })}
          placeholder='请输入文本'
          clearable
        />
      </Cell>
      <Cell>
        <Input
          value={state.tel}
          type='tel'
          onChange={tel => updateState({ tel })}
          placeholder='请输入手机号'
        />
      </Cell>
      <Cell>
        <Input
          value={state.digit}
          type='digit'
          onChange={digit => updateState({ digit })}
          placeholder='请输入整数'
        />
      </Cell>
      <Cell>
        <Input
          value={state.num}
          type='number'
          onChange={num => updateState({ num })}
          placeholder='请输入数字'
        />
      </Cell>

      <Cell>
        <Input
          value={state.password}
          type='password'
          onChange={password => updateState({ password })}
          placeholder='请输入密码'
        />
      </Cell>
    </>
  )
}

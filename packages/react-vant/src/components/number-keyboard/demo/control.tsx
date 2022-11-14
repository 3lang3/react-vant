import React from 'react'
import { Field, NumberKeyboard, hooks } from 'react-vant'

export default () => {
  const [state, set] = hooks.useSetState({
    visible: false,
    value: '',
  })
  return (
    <>
      <Field
        label='双向绑定'
        value={state.value}
        readOnly
        onClick={() => set({ visible: true })}
      />
      <NumberKeyboard
        value={state.value}
        visible={state.visible}
        maxlength={6}
        onChange={v => set({ value: v })}
        onBlur={() => set({ visible: false })}
      />
    </>
  )
}

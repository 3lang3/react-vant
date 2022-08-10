import React from 'react'
import { Cascader, Field } from 'react-vant'
import options from './options'

export default () => {
  return (
    <Cascader popup={{ round: true }} title='请选择所在地区' options={options}>
      {(_, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.text).join(',')}
          readOnly
          label='地区'
          placeholder='请选择所在地区'
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}

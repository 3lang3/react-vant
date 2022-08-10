import React from 'react'
import { Cascader, Field } from 'react-vant'

export default () => {
  return (
    <Cascader
      popup={{ round: true }}
      fieldNames={{
        text: 'name',
        value: 'code',
        children: 'items',
      }}
      title='请选择所在地区'
      options={[
        {
          name: '浙江省',
          code: '330000',
          items: [{ name: '杭州市', code: '330100' }],
        },
        {
          name: '江苏省',
          code: '320000',
          items: [{ name: '南京市', code: '320100' }],
        },
      ]}
    >
      {(value, selectedRows, actions) => (
        <Field
          isLink
          value={selectedRows.map(el => el.name).join(',')}
          readOnly
          label='地区'
          placeholder='请选择所在地区'
          onClick={() => actions.open()}
        />
      )}
    </Cascader>
  )
}

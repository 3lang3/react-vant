import React from 'react'
import { Cascader, Button, Field } from 'react-vant'
import options from './options'

export default () => {
  const [value, setValue] = React.useState([])

  return (
    <>
      <Cascader
        popup={{ round: true }}
        title='请选择所在地区'
        value={value}
        options={options}
        onFinish={setValue}
      >
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
      <Button
        block
        style={{ margin: '10px auto', width: '90%' }}
        type='primary'
        size='small'
        onClick={() => setValue(['330000', '330100', '330104'])}
      >
        外部设置
      </Button>
    </>
  )
}

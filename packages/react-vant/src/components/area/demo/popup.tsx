import React from 'react'
import { Area, Field } from 'react-vant'
import { areaList } from '@vant/area-data'

export default () => {
  const [value, setValue] = React.useState(['220000', '220300', '220303'])
  return (
    <Area
      popup={{
        round: true,
      }}
      title='标题'
      value={value}
      areaList={areaList}
      onConfirm={setValue}
    >
      {(_, selectRows, actions) => {
        return (
          <Field
            label='选择地区'
            value={selectRows.map(row => row?.text).join(',')}
            onClick={() => actions.open()}
          />
        )
      }}
    </Area>
  )
}

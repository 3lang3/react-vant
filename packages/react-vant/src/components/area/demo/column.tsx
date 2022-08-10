import React from 'react'
import { Area } from 'react-vant'
import { areaList } from '@vant/area-data'

export default () => {
  return (
    <Area
      title='标题'
      areaList={areaList}
      columnsNum={2}
      onChange={(val, options) => {
        console.log('selected value: ', val)
        console.log('selected option: ', options)
      }}
      onConfirm={v => console.log(v)}
    />
  )
}

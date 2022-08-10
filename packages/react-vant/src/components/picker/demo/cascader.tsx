import React from 'react'
import { Picker } from 'react-vant'
import { cascaderData } from './data'

export default () => {
  const [value, setValue] = React.useState(['2', '2-2', '2-2-2'])
  return <Picker value={value} onChange={setValue} columns={cascaderData} />
}

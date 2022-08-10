import React from 'react'
import { Picker } from 'react-vant'
import { fieldNamesData } from './data'

export default () => {
  const [value, setValue] = React.useState(['福建', '福州', '台江区'])
  return (
    <Picker
      title='标题'
      value={value}
      onChange={setValue}
      columns={fieldNamesData}
      columnsFieldNames={{
        text: 'cityName',
        children: 'cities',
      }}
    />
  )
}

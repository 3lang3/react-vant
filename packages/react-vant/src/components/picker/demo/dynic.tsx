import React from 'react'
import { Picker } from 'react-vant'

const cities = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州'],
}

async function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

async function request(key: string) {
  await sleep(1000)
  return cities[key]
}

export default () => {
  const [loading, setLoading] = React.useState(false)
  const [value, setValue] = React.useState<string[]>()
  const [columns, setColumns] = React.useState([
    { text: '浙江', children: [] },
    { text: '福建', children: [] },
  ])

  return (
    <>
      <Picker
        loading={loading}
        value={value}
        columns={columns}
        onChange={async (values: string[]) => {
          const key = values[0]
          if (!key) return
          // 已请求的忽略request
          if (
            columns.some(
              column => column.text === key && column.children.length > 0
            )
          ) {
            setValue(values)
            return
          }
          setLoading(true)
          const data = await request(key)
          setLoading(false)
          setColumns(columns =>
            columns.map(column => {
              if (column.text === key) {
                return {
                  ...column,
                  children: data.map(x => ({ text: x, value: x })),
                }
              }
              return column
            })
          )
        }}
      />
    </>
  )
}

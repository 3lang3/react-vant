import React from 'react'
import { Picker, Toast } from 'react-vant'

const columns = [
  { text: '南京', value: 0 },
  { text: '苏州', value: 1 },
  { text: '常州', value: 2 },
  { text: '淮安', value: 3 },
  { text: '扬州', value: 4 },
  { text: '南通', value: 5 },
  { text: '宿迁', value: 6 },
  { text: '泰州', value: 7 },
  { text: '无锡', value: 8 },
  { text: '长沙', value: 9 },
]

export default () => {
  return (
    <Picker
      title='基础使用'
      columns={columns}
      onChange={(val: string, selectRow, index: number) => {
        console.log('选中项: ', selectRow)
        Toast.info(`选中值${val}，索引: ${index}`)
      }}
      onCancel={() => Toast.info('点击取消按钮')}
      onConfirm={() => Toast.info('点击确认按钮')}
    />
  )
}

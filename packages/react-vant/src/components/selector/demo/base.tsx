import React from 'react'
import { Form, Selector } from 'react-vant'
import { options } from './options'

export default () => {
  return (
    <Form layout='vertical'>
      <Form.Item name='single' label='单选'>
        <Selector
          options={options}
          defaultValue={['1']}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </Form.Item>

      <Form.Item name='mulit' label='多选'>
        <Selector
          options={options}
          defaultValue={['2', '3']}
          multiple={true}
          onChange={(arr, extend) => console.log(arr, extend.items)}
        />
      </Form.Item>

      <Form.Item name='disabled' label='禁用状态'>
        <Selector
          options={[
            {
              label: '选项一',
              value: '1',
            },
            {
              label: '选项二',
              value: '2',
              disabled: true,
            },
            {
              label: '选项三',
              value: '3',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name='description' label='描述选项'>
        <Selector
          options={[
            {
              label: '选项一',
              description: '描述信息',
              value: '1',
            },
            {
              label: '选项二',
              description: '描述信息',
              value: '2',
            },
          ]}
        />
      </Form.Item>
      <Form.Item name='style' label='自定义样式'>
        <Selector
          style={{
            '--rv-selector-border-radius': '100px',
            '--rv-selector-checked-border':
              'solid var(--adm-color-primary) 1px',
            '--rv-selector-padding': '5px 15px',
          }}
          showCheckMark={false}
          options={options}
          defaultValue={['1']}
        />
      </Form.Item>
    </Form>
  )
}

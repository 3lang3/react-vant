import React from 'react'
import { Cascader, Toast, Field } from 'react-vant'

export default () => {
  const [dynamicOpts, setDynamicOpts] = React.useState([
    {
      text: '浙江省',
      value: '330000',
      children: [],
    },
  ])

  const onChange = (val: string[]) => {
    const key = val[0]
    const needRequest = dynamicOpts[0].children.length === 0
    if (key === dynamicOpts[0].value && needRequest) {
      Toast.loading({ message: '加载中...', duration: 0 })
      setTimeout(() => {
        Toast.clear()
        const newOpts = JSON.parse(JSON.stringify(dynamicOpts))
        newOpts[0].children = [
          { text: '杭州市', value: '330100' },
          { text: '宁波市', value: '330200' },
        ]
        setDynamicOpts(newOpts)
      }, 2000)
    }
  }

  return (
    <Cascader
      popup={{ round: true }}
      title='请选择所在地区'
      options={dynamicOpts}
      onChange={onChange}
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
  )
}
